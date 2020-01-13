import {Usuario} from '../entities/usuario.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
  async crearUsuario( usuario: Usuario ): Promise<Usuario> {
    console.log('Usuario despues: ', usuario);
    await this.save(usuario);
    return usuario;
  }

  async findAll(): Promise<Usuario[]> {
    return await this.find();
  }

  async findByEmail(emailUsuario: string): Promise<Usuario[]>{
    return await this.find({email: emailUsuario});
  }

}
