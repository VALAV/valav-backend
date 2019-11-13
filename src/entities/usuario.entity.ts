import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import{ IsString } from 'class-validator';
import {Rol} from './rol.entity';


@Entity({name: 'usuario'})
export class Usuario {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @IsString()
  @Column({name: 'nombre_usuario'})
  nombreUsuario: string;

  @Column({name: 'habilitado'})
  habilitado: boolean;

  @Column({name: 'password'})
  password: string;

  @OneToOne(type => Rol)
  @JoinColumn({name: 'rol_id'})
  rol: number;
}
