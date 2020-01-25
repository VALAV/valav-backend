import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';
import {Rol} from '../../rol/entities/rol.entity';
import { Prestador } from './prestador.entity';
import { UsuarioTIUN } from './usuariotiun.entity';

@Entity({name: 'usuario'})
export class Usuario {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @IsString()
  @Column({name: 'email'})
  email: string;

  @Column({name: 'habilitado'})
  habilitado: boolean;

  @Column({name: 'password'})
  password: string;

  @ManyToOne(type => Rol, {eager: true})
  @JoinColumn({name: 'rol_id'})
  rol: Rol;

  @OneToOne(type => Prestador, prestador => prestador.usuario)
  prestadores: Prestador[];

  @OneToOne(type => UsuarioTIUN, usuarioTIUN => usuarioTIUN.usuario)
  usuariosTIUN: UsuarioTIUN[];

  constructor(email: string, password: string, rol: Rol) {
    this.email = email;
    this.password = password;
    this.rol = rol;
    this.habilitado = true;
  }
}
