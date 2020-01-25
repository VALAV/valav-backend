import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Prestador } from '../../usuarios/entities/prestador.entity';

@Entity({name: 'sector_prestador'})
export class SectorPrestador {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @Column({name: 'nombre'})
  nombre: string;

  @OneToMany(type => Prestador,
      prestador => prestador.tipoId)
  prestadores: Prestador[];
}
