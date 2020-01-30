import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductoDto } from './dto/producto.dto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) { }
  @Post()
  agregarNuevoProducto(@Body() producto: ProductoDto) {
    return this.productoService.createProducto(producto);
  }

  @Get('prestador/:id')
  findProductosByPrestador(@Param() params) {
    return this.productoService.findProductosByPrestador(params.id);
  }
  @Get(':id')
  getProductoById(@Param() params) {
    return this.productoService.getProductoById(params.id);
  }
}
