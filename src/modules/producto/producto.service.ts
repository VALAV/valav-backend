import { Injectable } from '@nestjs/common';
import { ProductoDto } from './dto/producto.dto';
import { getCustomRepository } from 'typeorm';
import { PrestadorRepository } from '../usuarios/repositories/prestador.repository';
import { Producto } from './entities/producto.entity';
import { ProductoRepository } from './producto.repository';

@Injectable()
export class ProductoService {
  constructor() {}

  private async getPrestadorById(presId: number) {
    const prestadorRepository = getCustomRepository(PrestadorRepository);
    return await prestadorRepository.getById(presId);
  }

  async createProducto(producto: ProductoDto) {
    const prestador = await this.getPrestadorById(producto.presId);
    if (prestador == null) {
      console.log('No hay prestador con ese id');
    } else {
      let nuevoProducto = new Producto(producto.valorReal,
                              producto.nombre, prestador, producto.foto);
      const productoRepository = getCustomRepository(ProductoRepository);
      return await productoRepository.createProducto(nuevoProducto);
    }
  }

  async findProductosByPrestador(presId) {
    const prestador = await this.getPrestadorById(presId);
    if(prestador !== undefined || prestador !== null) {
      const productoRepository = getCustomRepository(ProductoRepository);
      return await productoRepository.findProductosByPrestador(prestador);
    }
  }

  async getProductoById(id) {
    const productoRepository = getCustomRepository(ProductoRepository);
    return await productoRepository.getProductoById(id);
  }

}
