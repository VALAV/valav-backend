import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import {UsuarioTIUN} from '../entities/usuariotiun.entity';
import {UsuarioTIUNDto} from '../dto/usuarioTIUN.dto';
import {UsuarioRepository} from './usuario.repository';
import {hashPassword} from "../../../assets/js/pass.utils";
import {Usuario} from "../entities/usuario.entity";

@EntityRepository(UsuarioTIUN)
export class UsuarioTIUNRepository extends Repository<UsuarioTIUN> {

  private usuarioRepository = getCustomRepository(UsuarioRepository);

  async crearUsuarioTIUN( usuarioTIUN: UsuarioTIUNDto ): Promise<UsuarioTIUN> {
    let password = '';
    await hashPassword(usuarioTIUN.password).then(value => password = value);
    const usuario = await this.usuarioRepository.crearUsuario(new Usuario(usuarioTIUN.email,
                                                              usuarioTIUN.password,
                                                              usuarioTIUN.rolId));
    const nuevoUsuarioTIUN = new UsuarioTIUN(usuarioTIUN.nombres,
      usuarioTIUN.apellidos, usuarioTIUN.tipoDocumento, usuarioTIUN.documento,
      usuarioTIUN.tiun, usuario.id);
    console.log('UsuarioTIUN despues: ', nuevoUsuarioTIUN);
    const nuevoUsuario = await this.save(nuevoUsuarioTIUN);
    return nuevoUsuario;
  }

  async findAll(): Promise<UsuarioTIUN[]> {
    const usuarios = await this.find();
    console.log(usuarios);
    return usuarios;
  }

}
