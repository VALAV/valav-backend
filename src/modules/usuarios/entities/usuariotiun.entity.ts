import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import { Usuario } from './usuario.entity';
import { TipoDocumento } from '../../tipo-documento/entities/tipoDocumento.entity';

@Entity({name: 'usuario_tiun'})
export class UsuarioTIUN {
  @OneToOne(type => Usuario)
  @JoinColumn({name: 'usuario_id'})
  usuario: number;

  @Column({name: 'nombres'})
  nombres: string;

  @Column({name: 'apellidos'})
  apellidos: string;

  @OneToOne(type => TipoDocumento)
  @JoinColumn({name: 'tipo_doc_id'})
  tipoDocumento: number;

  @PrimaryColumn({name: 'documento'})
  documento: string;

  @Column({name: 'tiun'})
  tiun: string;

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
