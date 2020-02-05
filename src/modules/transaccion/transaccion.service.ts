import {Injectable} from "@nestjs/common";
import {TransaccionAsignarDto} from "./dto/transaccionAsignar.dto";
import {UsuarioService} from "../usuarios/usuario.service";
import {TipoTransaccionService} from "../tipo-transaccion/tipo-transaccion.service";
import {EstadoTransaccionService} from "../estado-transaccion/estado-transaccion.service";
import {Transaccion} from "./entities/transaccion.entity";

@Injectable()
export class TransaccionService {
    constructor( private readonly usuarioService: UsuarioService,
                 private readonly tipoTransService: TipoTransaccionService,
                 private readonly estadoTransService: EstadoTransaccionService){}

    async createTransaccion (transaccion: TransaccionAsignarDto) {
        let usuario = await this.usuarioService.getUsuarioTIUNById(transaccion.usuarioId);
        let prestador = await this.usuarioService.getPrestadorById(transaccion.presId);
        let newTransaccion;
        // TODO: Crear transaccion desde aca
        if(usuario !== null && usuario !== undefined && prestador !== null && usuario !== undefined) {
            newTransaccion = new Transaccion(usuario, prestador, transaccion.valorPesos, 0, new Date());
            let equivalencia = prestador.valorPunto;
            let puntosTotales = Math.floor(transaccion.valorPesos / equivalencia);
            // Set puntos
            newTransaccion.valorPts(puntosTotales);

        } else {
            // TODO: Transaccion fallida
        }

    }

    private update
}