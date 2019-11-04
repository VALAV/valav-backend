import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {Usuario} from './usuario.entity';

const ROL_1 = 'Usuario TIUN';
const ROL_2 = 'Prestador servicios';

@Entity({name: 'rol'})
export class Rol {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @Column({name: 'nombre'})
  nombre: string;

  @OneToMany(type => Usuario, usuario => usuario.rol)
  usuarios: Usuario[];
}
