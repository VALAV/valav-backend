import { Controller, Get, Param } from '@nestjs/common';
import { PuntosUsuarioService } from './puntos-usuario.service';

@Controller('puntos')
export class PuntosUsuarioController {
  constructor(private readonly puntosService: PuntosUsuarioService) {}

  @Get(':id')
  findPuntosByUsuario(@Param()params) {
    return this.puntosService.findPuntosByUsuario(params.id);
  }
}
