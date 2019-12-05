import {UsuarioTIUN} from '../entities/usuariotiun.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import {UsuarioTIUNDto} from '../dto/usuarioTIUN.dto';
import {UsuarioRepository} from './usuario.repository';

@EntityRepository(UsuarioTIUN)
export class UsuarioTIUNRepository extends Repository<UsuarioTIUN> {
  async crearUsuarioTIUN( usuarioTIUN: UsuarioTIUNDto ): Promise<string> {
    const usuarioRepository = getCustomRepository(UsuarioRepository);
    const usuario = await usuarioRepository.crearUsuario({
      email: usuarioTIUN.email,
      password: usuarioTIUN.password,
      rolId: usuarioTIUN.rolId
    });
    const nuevoUsuarioTIUN = new UsuarioTIUN(usuarioTIUN.nombres,
      usuarioTIUN.apellidos, usuarioTIUN.tipoDocumento, usuarioTIUN.documento,
      usuarioTIUN.tiun, usuario.id);
    console.log('UsuarioTIUN despues: ', nuevoUsuarioTIUN);
    await this.save(nuevoUsuarioTIUN);
    return 'Ok';
  }
}
