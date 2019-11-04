import {UsuarioTIUN} from '../entities/usuariotiun.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import {UsuarioTIUNDto} from '../modules/usuarios/dto/usuarioTIUN.dto';
import {UsuarioRepository} from './usuario.repository';

@EntityRepository(UsuarioTIUN)
export class UsuarioTIUNRepository extends Repository<UsuarioTIUN> {
  async crearUsuarioTIUN( usuarioTIUN: UsuarioTIUNDto ): Promise<string> {
    const usuarioRepository = getCustomRepository(UsuarioRepository);
    const usuario = await usuarioRepository.crearUsuario({
      nombreUsuario: usuarioTIUN.nombreUsuario,
      password: usuarioTIUN.password,
      rolId: usuarioTIUN.rolId
    });
    let nuevoUsuarioTIUN = new UsuarioTIUN();
    nuevoUsuarioTIUN.nombres = usuarioTIUN.nombres;
    nuevoUsuarioTIUN.apellidos = usuarioTIUN.apellidos;
    nuevoUsuarioTIUN.documento = usuarioTIUN.documento;
    nuevoUsuarioTIUN.usuario = usuario.id;
    console.log('Usuario despues: ', nuevoUsuarioTIUN);
    await this.save(nuevoUsuarioTIUN);
    return 'Ok';
  }
}
