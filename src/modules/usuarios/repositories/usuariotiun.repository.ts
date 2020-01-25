import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import {UsuarioTIUN} from '../entities/usuariotiun.entity';
import {UsuarioTIUNDto} from '../dto/usuarioTIUN.dto';
import {UsuarioRepository} from './usuario.repository';
import {hashPassword} from "../../../assets/js/pass.utils";
import {Usuario} from "../entities/usuario.entity";
import {Rol} from "../../rol/entities/rol.entity";

@EntityRepository(UsuarioTIUN)
export class UsuarioTIUNRepository extends Repository<UsuarioTIUN> {

  private usuarioRepository = getCustomRepository(UsuarioRepository);

  async crearUsuarioTIUN( usuarioTIUN: UsuarioTIUNDto, rol: Rol ): Promise<UsuarioTIUN> {
    let password = '';
    await hashPassword(usuarioTIUN.password).then(value => password = value);
    const usuario = await this.usuarioRepository.crearUsuario(
        new Usuario(usuarioTIUN.email,
                    password,
                    rol
        ));
    const nuevoUsuarioTIUN = new UsuarioTIUN(usuarioTIUN.nombres,
      usuarioTIUN.apellidos, usuarioTIUN.tipoDocumento, usuarioTIUN.documento,
      usuarioTIUN.tiun, usuario.id);
    const nuevoUsuario = await this.save(nuevoUsuarioTIUN);
    return nuevoUsuario;
  }

  async findAll(): Promise<UsuarioTIUN[]> {
    const usuarios = await this.find();
    return usuarios;
  }

}
