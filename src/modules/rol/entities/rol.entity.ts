import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {Usuario} from '../../usuarios/entities/usuario.entity';

@Entity({name: 'rol'})
export class Rol {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @Column({name: 'nombre'})
  nombre: string;

  @OneToMany(type => Usuario, usuario => usuario.rol)
  usuarios: Usuario[];
}
