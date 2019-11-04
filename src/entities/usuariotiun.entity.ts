import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity({name: 'usuario_tiun'})
export class UsuarioTIUN {
  @PrimaryGeneratedColumn({name: 'u_tiun_id'})
  id: number;

  @Column({name: 'nombres'})
  nombres: string;

  @Column({name: 'apellidos'})
  apellidos: string;

  @Column({name: 'documento'})
  documento: string;

  @OneToOne(type => Usuario)
  @JoinColumn({name: 'usuario_id'})
  usuario: number;
}
