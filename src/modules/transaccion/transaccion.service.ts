import {Injectable} from "@nestjs/common";
import {TransaccionAsignarDto} from "./dto/transaccionAsignar.dto";
import {UsuarioService} from "../usuarios/usuario.service";
import {TipoTransaccionService} from "../tipo-transaccion/tipo-transaccion.service";
import {EstadoTransaccionService} from "../estado-transaccion/estado-transaccion.service";
import {Transaccion} from "./entities/transaccion.entity";
import {PuntosUsuarioService} from "../puntos-usuario/puntos-usuario.service";
import {PuntosUsuario} from "../puntos-usuario/entities/puntos-usuario.entity";
import {UsuarioTIUN} from "../usuarios/entities/usuariotiun.entity";
import {Prestador} from "../usuarios/entities/prestador.entity";
import {getCustomRepository} from "typeorm";
import {TransaccionRepository} from "./transaccion.repository";
import { TransaccionRedimirDto } from './dto/transaccionRedimir.dto';
import { getMonthPrior, getNow, getToday, getWeekPrior } from '../../assets/js/date.utils';

const REDIMIR = 2;
const ASIGNAR = 1;

const SUCCESS = 1;
const FAILURE = 2;

const HOY = 1;
const SEMANA = 2;
const MES = 3;
@Injectable()
export class TransaccionService {
    constructor( private readonly usuarioService: UsuarioService,
                 private readonly tipoTransService: TipoTransaccionService,
                 private readonly estadoTransService: EstadoTransaccionService,
                 private readonly puntosService: PuntosUsuarioService){}



    async createTransaccionAsignar (transaccion: TransaccionAsignarDto) {
        let usuario = await this.usuarioService.getUsuarioTIUNById(transaccion.usuarioId);
        let prestador = await this.usuarioService.getPrestadorById(transaccion.presId);
        let newTransaccion;
        if(usuario !== null && usuario !== undefined && prestador !== null && usuario !== undefined) {
            newTransaccion = new Transaccion(usuario, prestador, transaccion.valorPesos,
                0, getNow(), await this.tipoTransService.getTipoById(ASIGNAR));
            // Adquiere los puntos del usuario en este servicio
            let puntosUsuario = await this.getOrCreatePuntos(usuario, prestador);

            console.log('usuario', usuario);
            console.log('prestador', prestador);
            console.log('puntosUsuario', puntosUsuario);

            let equivalencia = prestador.valorPunto;
            let puntosTotales = Math.floor(transaccion.valorPesos / equivalencia);

            // Actualiza puntos usuario
            let newPuntos = await this.updatePuntosUsuario(puntosUsuario, ASIGNAR, puntosTotales);
            console.log('newPuntos', newPuntos);

            // Actualiza prestador
            let newPres = await this.updatePuntosPrestador(prestador, ASIGNAR, puntosTotales);
            console.log('newPres',newPres);

            // Actualiza Transaccion
            newTransaccion.valorPts = puntosTotales;
            // TODO: Revisar si los retornos de las funciones anteriores son diferentes a nulo para setear
            //       la transaccion como exito o falla
            this.saveTransaction(newTransaccion, SUCCESS);
        }

    }

    async createTransaccionRedimir(transaccion: TransaccionRedimirDto) {
        let usuario = await this.usuarioService.getUsuarioTIUNById(transaccion.usuarioId);
        let prestador = await this.usuarioService.getPrestadorById(transaccion.presId);
        let newTransaccion;
        if(usuario !== null && usuario !== undefined && prestador !== null && usuario !== undefined) {
            newTransaccion = new Transaccion(usuario, prestador, 0,
              transaccion.valorPuntos, getNow(), await this.tipoTransService.getTipoById(REDIMIR));
            // Adquiere los puntos del usuario en este servicio
            let puntosUsuario = await this.getOrCreatePuntos(usuario, prestador);

            console.log('usuario', usuario);
            console.log('prestador', prestador);
            console.log('puntosUsuario', puntosUsuario);

            if (puntosUsuario.puntos >= transaccion.valorPuntos) {
                // Actualiza puntos usuario
                let newPuntos = await this.updatePuntosUsuario(puntosUsuario, REDIMIR, transaccion.valorPuntos);
                console.log('newPuntos', newPuntos);

                // Actualiza prestador
                let newPres = await this.updatePuntosPrestador(prestador, REDIMIR, transaccion.valorPuntos);
                console.log('newPres',newPres);

                // Actualiza Transaccion
                newTransaccion.valorPts = transaccion.valorPuntos;
                // TODO: Revisar si los retornos de las funciones anteriores son diferentes a nulo para setear
                //       la transaccion como exito o falla
                this.saveTransaction(newTransaccion, SUCCESS);
            }
        }
    }

    async findTransaacionesByTipoAndFecha(tipoId: number, fecha: number) {
        const tipo = await this.tipoTransService.getTipoById(tipoId);
        let fechaComparacion;
        if (fecha === HOY) {
            console.log('hoy');
            fechaComparacion = getToday();
        } else if (fecha === SEMANA) {
            console.log('semana');
            fechaComparacion = getWeekPrior();
        } else if (fecha === MES) {
            console.log('mes');
            fechaComparacion = getMonthPrior();
        }
        console.log('fechaComparacion:', fechaComparacion);
        const transRepository = getCustomRepository(TransaccionRepository);
        return await transRepository.findByTipoAndFecha(tipo, fechaComparacion);
    }

    private async saveTransaction(tran: Transaccion, tipo: number) {
        if (tipo === SUCCESS) {
            tran.estado = await this.estadoTransService.getEstadoById(SUCCESS);
        } else {
            tran.estado = await this.estadoTransService.getEstadoById(FAILURE);
        }
        return this.saveOrUpdateTransaction(tran);
    }

    private async updatePuntosUsuario(puntosUsuario: PuntosUsuario, tipo: number, puntos: number) {
        if (tipo === ASIGNAR) {
            puntosUsuario.puntos = puntosUsuario.puntos + puntos;
        } else {
            puntosUsuario.puntos = puntosUsuario.puntos - puntos;
        }
        console.log('Dentro de puntosUsuario', puntosUsuario);
        return await this.puntosService.saveOrUpdatePuntos(puntosUsuario);
    }

    private async updatePuntosPrestador(prestador: Prestador, tipo: number , puntos: number) {
        if(tipo === REDIMIR) {
            prestador.ptsRedimidos = prestador.ptsRedimidos + puntos;
        } else {
            prestador.ptsEntregados = prestador.ptsEntregados + puntos;
        }
        console.log(prestador);
        return await this.usuarioService.saveOrUpdatePrestador(prestador);
    }

    private async getOrCreatePuntos(usuario: UsuarioTIUN, prestador: Prestador) {
        let puntosUsuario = await this.puntosService.getPuntosByUsuarioYPrestador(usuario, prestador);
        if (puntosUsuario === null || puntosUsuario === undefined) {
            puntosUsuario = new PuntosUsuario(usuario, prestador);
        }
        return puntosUsuario;
    }

    private async saveOrUpdateTransaction(transaction: Transaccion) {
        const transRepository = getCustomRepository(TransaccionRepository);
        return await transRepository.saveOrUpdate(transaction);
    }
}
