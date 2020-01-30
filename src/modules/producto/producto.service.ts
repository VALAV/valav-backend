import { Injectable } from '@nestjs/common';
import { ProductoDto } from './dto/producto.dto';
import { getCustomRepository } from 'typeorm';
import { PrestadorRepository } from '../usuarios/repositories/prestador.repository';
import { Producto } from './entities/producto.entity';
import { ProductoRepository } from './producto.repository';

@Injectable()
export class ProductoService {
  constructor() {}

  async createProducto(producto: ProductoDto) {
    const prestadorRepository = getCustomRepository(PrestadorRepository);
    const prestador = await prestadorRepository.getById(producto.presId);
    if (prestador == null) {
      console.log('No hay prestador con ese id');
    } else {
      let nuevoProducto = new Producto(producto.valorPts, producto.valorReal,
                              producto.nombre, prestador, producto.foto);
      const productoRepository = getCustomRepository(ProductoRepository);
      return await productoRepository.createProducto(nuevoProducto);
    }
  }

}
