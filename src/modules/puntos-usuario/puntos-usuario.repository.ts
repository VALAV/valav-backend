import {EntityRepository, Repository} from "typeorm";
import {PuntosUsuario} from "./entities/puntos-usuario.entity";
import {UsuarioTIUN} from "../usuarios/entities/usuariotiun.entity";
import {Prestador} from "../usuarios/entities/prestador.entity";

@EntityRepository(PuntosUsuario)
export class PuntosUsuarioRepository extends Repository<PuntosUsuario> {
    async getPuntosByUsuarioYPrestador(usuarioTIUN: UsuarioTIUN, pres: Prestador) {
        return await this.findOne({usuario: usuarioTIUN, prestador: pres});
    }

    async saveOrUpdate(puntos: PuntosUsuario) {
        return await this.save(puntos);
    }
}