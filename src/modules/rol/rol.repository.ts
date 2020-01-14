import { Rol} from './entities/rol.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Rol)
export class RolRepository extends Repository<Rol> {
  async getRolById( rolId: number): Promise<Rol> {
    return await this.findOne({ id : rolId});
  }

  syncGetRolById(rolId: number): Rol {
    let rol;
    switch (rolId) {
      case 1:
        rol = new Rol(1, "Usuario TIUN");
        break;
      case 2:
        rol = new Rol( 2,  "Prestador servicios");
        break;
    }
    return rol;
  }
}
