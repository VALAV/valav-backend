import { Column, Entity, getCustomRepository, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {Rol} from './rol.entity';

@Entity({name: 'usuario'})
export class Usuario {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

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
