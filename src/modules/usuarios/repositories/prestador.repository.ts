import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import {Prestador} from '../entities/prestador.entity';
import { Rol } from '../../rol/entities/rol.entity';
import { hashPassword } from '../../../assets/js/pass.utils';
import { Usuario } from '../entities/usuario.entity';
import { PrestadorDto } from '../dto/prestador.dto';
import { UsuarioRepository } from './usuario.repository';
import { Producto } from '../../producto/entities/producto.entity';

@EntityRepository(Prestador)
export class PrestadorRepository extends Repository<Prestador>{

    private usuarioRepository = getCustomRepository(UsuarioRepository);

    async crearPrestador( prestador: PrestadorDto, rol: Rol ): Promise<Prestador> {
        let password = '';
        await hashPassword(prestador.password).then(value => password = value);
        const usuario = await this.usuarioRepository.crearUsuario(
          new Usuario(prestador.email,
            password,
            rol
          ));
        const nuevoPrestador = new Prestador(usuario.id, prestador.razonSocial,
          prestador.nit, prestador.tipoId, prestador.sectorId, prestador.rut);
        const nuevoUsuario = await this.save(nuevoPrestador);
        return nuevoUsuario;
    }

    async findAll(): Promise<Prestador[]> {
        return await this.find();
    }

    async getById(idPrestador: number): Promise<Prestador> {
        return await this.findOne({usuario: idPrestador});
    }

    async updatePrestador(prestador: Prestador) {
        return await this.save(prestador);
    }
}
