import {Injectable} from "@nestjs/common";
import {UsuarioTIUN} from "../usuarios/entities/usuariotiun.entity";
import {Prestador} from "../usuarios/entities/prestador.entity";
import {getCustomRepository} from "typeorm";
import {PuntosUsuarioRepository} from "./puntos-usuario.repository";
import {PuntosUsuario} from "./entities/puntos-usuario.entity";
import { UsuarioService } from '../usuarios/usuario.service';

@Injectable()
export class PuntosUsuarioService {
    constructor(private readonly usuarioService: UsuarioService) {}

    async getPuntosByUsuarioYPrestador(usuario: UsuarioTIUN, prestador: Prestador) {
        const puntosRepository = getCustomRepository(PuntosUsuarioRepository);
        return await puntosRepository.getPuntosByUsuarioYPrestador(usuario, prestador);
    }

    async findPuntosByUsuario(usuarioId: number) {
        let usuario = await this.usuarioService.getUsuarioTIUNById(usuarioId);
        const puntosRepository = getCustomRepository(PuntosUsuarioRepository);
        return await puntosRepository.findPuntosByUsuario(usuario);
    }

    async saveOrUpdatePuntos(puntos: PuntosUsuario) {
        const puntosRepository = getCustomRepository(PuntosUsuarioRepository);
        return await puntosRepository.saveOrUpdate(puntos);
    }
}
