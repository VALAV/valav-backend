import { EntityRepository, Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';

@EntityRepository(Producto)
export class ProductoRepository extends Repository<Producto> {
  async createProducto(producto: Producto) {
    return await this.save(producto);
  }
}
