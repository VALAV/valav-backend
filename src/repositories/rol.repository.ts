import { Rol} from '../entities/rol.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Rol)
export class RolRepository extends Repository<Rol> {
  async getRolById( rolId: number): Promise<Rol> {
    return await this.findOne({ id : rolId});
  }
}
