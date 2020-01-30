import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Prestador } from '../../usuarios/entities/prestador.entity';

@Entity({name: 'producto'})
export class Producto {

  constructor(valorPts: number, valorReal: number, nombre: string,
              prestador: Prestador, foto: string = null ) {
    this.valorPts = valorPts;
    this.valorReal = valorReal;
    this.nombre = nombre;
    this.foto = foto;
    this.prestador = prestador;
  }

  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @Column({name: 'valor_pts'})
  valorPts: number;

  @Column({name: 'valor_real'})
  valorReal: number;

  @Column({name: 'nombre'})
  nombre: string;

  @Column({name: 'foto'})
  foto: string;

  @ManyToOne(type => Prestador, prestador => prestador.productos)
  @JoinColumn({name: 'pres_id'})
  prestador: Prestador;
}
