import { Entity, Column, OneToOne, JoinColumn, ManyToOne, PrimaryColumn, OneToMany } from 'typeorm';
import { Usuario} from './usuario.entity';
import { TipoPrestador } from '../../tipo-prestador/entities/tipoPrestador.entity';
import { SectorPrestador } from '../../sector-prestador/entities/sectorPrestador.entity';
import { Producto } from '../../producto/entities/producto.entity';
import * as dotenv from 'dotenv';
import {UbicacionPrestador} from "../../ubicacion-prestador/entities/ubicacionPrestador.entity";
import {Transaccion} from "../../transaccion/entities/transaccion.entity";

dotenv.config();

const INTENTOS_CAMBIO = +process.env.INTENTOS_CAMBIO_PRESTADOR;

@Entity({name: 'prestador'})
export class Prestador {
  @PrimaryColumn({name: 'pres_id'})
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

  @Column({name: 'valor_punto'})
  valorPunto: number;

  @Column({name: 'pts_entregados'}) private _ptsEntregados: number;

  @Column({name: 'pts_redimidos'}) private _ptsRedimidos: number;

  @ManyToOne(type => TipoPrestador, {eager: true})
  @JoinColumn({name: 'tipo_id'})
  tipoId: number;

  @ManyToOne(type => SectorPrestador, {eager: true})
  @JoinColumn({name: 'sector_id'})
  sectorId: number;

  @OneToMany(type => Producto, producto => producto.prestador)
  productos: Producto[];

  @OneToMany(type => UbicacionPrestador, ubicacion => ubicacion.prestador)
  ubicaciones: UbicacionPrestador[];

  @OneToMany(type => Transaccion, transaccion => transaccion.prestador)
  transacciones: Transaccion[];

  constructor(usuario: number, razonSocial: string, nit: string,
              tipoId: number, valorPunto: number, sectorId: number, rut: string) {
    this.usuario = usuario;
    this.razonSocial = razonSocial;
    this.nit = nit;
    this.rut = rut;
    this.intentosCambio = INTENTOS_CAMBIO;
    this.valorPunto = valorPunto;
    this._ptsEntregados = 0;
    this._ptsRedimidos = 0;
    this.tipoId = tipoId;
    this.sectorId = sectorId;
  }


  set ptsEntregados(value: number) {
    this._ptsEntregados = value;
  }

  set ptsRedimidos(value: number) {
    this._ptsRedimidos = value;
  }


  get ptsEntregados(): number {
    return this._ptsEntregados;
  }

  get ptsRedimidos(): number {
    return this._ptsRedimidos;
  }
}
