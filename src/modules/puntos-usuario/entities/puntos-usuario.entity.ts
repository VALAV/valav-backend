import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioTIUN} from "../../usuarios/entities/usuariotiun.entity";
import {Prestador} from "../../usuarios/entities/prestador.entity";


@Entity({name: 'puntos_usuario'})
export class PuntosUsuario {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @ManyToOne(type => UsuarioTIUN, usuario => usuario.puntos)
    @JoinColumn({name: 'tiun_documento'})
    usuario: UsuarioTIUN;

    @ManyToOne(type => Prestador)
    @JoinColumn({name: 'pres_id'})
    prestador: Prestador;

    @Column({name: 'puntos_usuario'})
    puntos: number;

    constructor(usuario: UsuarioTIUN, prestador: Prestador, puntos: number) {
        this.usuario = usuario;
        this.prestador = prestador;
        this.puntos = puntos;
    }
}