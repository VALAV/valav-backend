import { Body, Controller, Param, Post } from '@nestjs/common';
import { ProductoDto } from './dto/producto.dto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) { }
  @Post()
  agregarNuevoProducto(@Body() producto: ProductoDto) {
    return this.productoService.createProducto(producto);
  }
}
