import {Controller, Get, Post, Param, Body} from '@nestjs/common';
import {CreateUsuarioDto} from './dto/create-usuario.dto';
import {UsuarioService} from '../../services/usuario/usuario.service';
import { UsuarioTIUNDto } from './dto/usuarioTIUN.dto';

@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly usuarioService: UsuarioService){}

    @Get()
    findAll(): string {
        return this.usuarioService.findAll();
    }

    @Get(':id')
    findById(@Param() params): string {
        return this.usuarioService.findById(params.id);
    }

    @Post('usuario-tiun')
    createUsuarioTIUN(@Body() usuarioTIUN: UsuarioTIUNDto) {
        return this.usuarioService.createUsuarioTIUN(usuarioTIUN);
    }
}
