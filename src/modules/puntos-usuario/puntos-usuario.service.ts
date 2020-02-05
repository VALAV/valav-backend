import {Injectable} from "@nestjs/common";
import {UsuarioTIUN} from "../usuarios/entities/usuariotiun.entity";
import {Prestador} from "../usuarios/entities/prestador.entity";
import {getCustomRepository} from "typeorm";
import {PuntosUsuarioRepository} from "./puntos-usuario.repository";
import {PuntosUsuario} from "./entities/puntos-usuario.entity";

@Injectable()
export class PuntosUsuarioService {
    async getPuntosByUsuarioYPrestador(usuario: UsuarioTIUN, prestador: Prestador) {
        const puntosRepository = getCustomRepository(PuntosUsuarioRepository);
        return await puntosRepository.getPuntosByUsuarioYPrestador(usuario, prestador);
    }

    async saveOrUpdatePuntos(puntos: PuntosUsuario) {
        const puntosRepository = getCustomRepository(PuntosUsuarioRepository);
        return await puntosRepository.saveOrUpdate(puntos);
    }
}