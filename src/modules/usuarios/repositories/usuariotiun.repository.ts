import {UsuarioTIUN} from '../entities/usuariotiun.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import {UsuarioTIUNDto} from '../dto/usuarioTIUN.dto';
import {UsuarioRepository} from './usuario.repository';

@EntityRepository(UsuarioTIUN)
export class UsuarioTIUNRepository extends Repository<UsuarioTIUN> {

  private usuarioRepository = getCustomRepository(UsuarioRepository);

  async crearUsuarioTIUN( usuarioTIUN: UsuarioTIUNDto ): Promise<UsuarioTIUN> {
    const usuario = await this.usuarioRepository.crearUsuario({
      email: usuarioTIUN.email,
      password: usuarioTIUN.password,
      rolId: usuarioTIUN.rolId
    });
    const nuevoUsuarioTIUN = new UsuarioTIUN(usuarioTIUN.nombres,
      usuarioTIUN.apellidos, usuarioTIUN.tipoDocumento, usuarioTIUN.documento,
      usuarioTIUN.tiun, usuario.id);
    console.log('UsuarioTIUN despues: ', nuevoUsuarioTIUN);
    const nuevoUsuario = await this.save(nuevoUsuarioTIUN);
    return nuevoUsuario;
  }

  async findAll(): any {
    const usuarios = await this.find();
    console.log(usuarios);
  }

}
