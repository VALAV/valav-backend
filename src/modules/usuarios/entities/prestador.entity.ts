import { Entity, Column, OneToOne, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Usuario} from './usuario.entity';
import { TipoPrestador } from '../../tipo-prestador/entities/tipoPrestador.entity';
import { SectorPrestador } from '../../sector-prestador/entities/sectorPrestador.entity';

const INTENTOS_CAMBIO = 3;

@Entity({name: 'prestador'})
export class Prestador {
  @PrimaryColumn({name: 'pres_id'})
  @OneToOne(type => Usuario, {eager: true})
  @JoinColumn({name: 'pres_id'})
  usuario: number;

  @Column({name: 'razon_social'})
  razonSocial: string;

  @Column({name: 'nit'})
  nit: string;

  @Column({name: 'rut'})
  rut: string;

  @Column({name: 'intentos_cambio'})
  intentosCambio: number;

  @Column({name: 'pts_entregados'})
  ptsEntregados: number;

  @Column({name: 'pts_redimidos'})
  ptsRedimidos: number;

  @ManyToOne(type => TipoPrestador, {eager: true})
  @JoinColumn({name: 'tipo_id'})
  tipoId: number;

  @ManyToOne(type => SectorPrestador, {eager: true})
  @JoinColumn({name: 'sector_id'})
  sectorId: number;

  constructor(usuario: number, razonSocial: string, nit: string,
              tipoId: number, sectorId: number, rut: string) {
    this.usuario = usuario;
    this.razonSocial = razonSocial;
    this.nit = nit;
    this.rut = rut;
    this.intentosCambio = INTENTOS_CAMBIO;
    this.ptsEntregados = 0;
    this.ptsRedimidos = 0;
    this.tipoId = tipoId;
    this.sectorId = sectorId;
  }

}
