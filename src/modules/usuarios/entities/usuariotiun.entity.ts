import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn, ManyToOne, OneToMany} from 'typeorm';
import { Usuario } from './usuario.entity';
import { TipoDocumento } from '../../tipo-documento/entities/tipoDocumento.entity';
import {Transaccion} from "../../transaccion/entities/transaccion.entity";
import {PuntosUsuario} from "../../puntos-usuario/entities/puntos-usuario.entity";

@Entity({name: 'usuario_tiun'})
export class UsuarioTIUN {
  @OneToOne(type => Usuario, {eager: true})
  @JoinColumn({name: 'usuario_id'})
  usuario: number;

  @Column({name: 'nombres'})
  nombres: string;

  @Column({name: 'apellidos'})
  apellidos: string;

  @ManyToOne(type => TipoDocumento, tipoDoc => tipoDoc.usuariosTIUN, {eager: true})
  @JoinColumn({name: 'tipo_doc_id'})
  tipoDocumento: number;

  @PrimaryColumn({name: 'documento'})
  documento: string;

  @Column({name: 'tiun'})
  tiun: string;

  @OneToMany(type => Transaccion, transaccion => transaccion.usuarioTIUN)
  transacciones: Transaccion[];

  @OneToMany(type => PuntosUsuario, puntos => puntos.usuario)
  puntos: PuntosUsuario[];

  constructor(nombres: string, apellidos: string, tipoDocumento: number,
              documento: string, tiun: string, usuario: number) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.tipoDocumento = tipoDocumento;
    this.documento = documento;
    this.tiun = tiun;
    this.usuario = usuario;
  }
}
