import { Entity, Column} from 'typeorm';
import { Usuario} from '../../usuarios/entities/usuario.entity';

@Entity({name: 'Prestador'})
export class Prestador extends Usuario {
  @Column({name: 'nombre_empresa'})
  nombreEmpresa: string;

  @Column({name: 'razon_social'})
  razonSocial: string;

  @Column({name: 'nit'})
  nit: string;

  @Column({name: 'rut'})
  rut: string;

  @Column({name: 'direccion'})
  direccion: string;
}
