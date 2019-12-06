import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioTIUN } from '../../usuarios/entities/usuariotiun.entity';

@Entity({name: 'tipo_documento'})
export class TipoDocumento {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @Column({name: 'nombre'})
  nombre: string;

  @OneToMany(type => UsuarioTIUN,
    usuarioTIUN => usuarioTIUN.tipoDocumento)
  usuariosTIUN: UsuarioTIUN[];
}
