import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity({name: 'usuario_tiun'})
export class UsuarioTIUN {
  @OneToOne(type => Usuario)
  @JoinColumn({name: 'usuario_id'})
  usuario: number;

  @Column({name: 'nombres'})
  nombres: string;

  @Column({name: 'apellidos'})
  apellidos: string;

  @ManyToOne(type => )

  @Column({name: 'documento'})
  documento: string;

  @Column({name: 'tiun'})
  tiun: string;


}
