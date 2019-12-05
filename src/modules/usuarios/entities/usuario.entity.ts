import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';
import {Rol} from '../../rol/entities/rol.entity';

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

  @OneToOne(type => Rol)
  @JoinColumn({name: 'rol_id'})
  rol: number;

  constructor(email: string, password: string, rolId: number ) {
    this.email = email;
    this.password = password;
    this.rol = rolId;
    this.habilitado = true;
  }
}
