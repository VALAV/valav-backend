import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {Usuario} from '../../usuarios/entities/usuario.entity';

@Entity({name: 'rol'})
export class Rol {

  constructor(id: number, nombre: string) {
    this._id = id;
    this.nombre = nombre;
  }

  @PrimaryGeneratedColumn({name: 'id'})
  private readonly _id: number;

  @Column({name: 'nombre'})
  nombre: string;

  @OneToMany(type => Usuario, usuario => usuario.rol)
  usuarios: Usuario[];


  get id(): number {
    return this._id;
  }
}
