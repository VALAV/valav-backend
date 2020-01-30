import { EntityRepository, Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { Prestador } from '../usuarios/entities/prestador.entity';

@EntityRepository(Producto)
export class ProductoRepository extends Repository<Producto> {
  async createProducto(producto: Producto) {
    return await this.save(producto);
  }

  async findProductosByPrestador(pres: Prestador) {
    return await this.find({prestador: pres});
  }

  async getProductoById(idProducto: number) {
    return await this.findOne({id: idProducto});
  }
}
