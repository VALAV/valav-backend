import {Usuario} from '../entities/usuario.entity';
import {EntityRepository, Repository} from 'typeorm';
import {CreateUsuarioDto} from '../modules/usuarios/dto/create-usuario.dto';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
  async crearUsuario( usuario: CreateUsuarioDto ): Promise<Usuario> {
    let newUsuario = new Usuario();
    newUsuario.nombreUsuario = usuario.nombreUsuario;
    newUsuario.password = usuario.password;
    newUsuario.habilitado = true;
    newUsuario.rol = usuario.rolId;
    console.log('Usuario despues: ', newUsuario);
    await this.save(newUsuario);
    return newUsuario;
  }
}
