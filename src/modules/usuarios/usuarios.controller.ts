import {Controller, Get, Post, Param, Body} from '@nestjs/common';
import {UsuarioService} from './usuario.service';
import { UsuarioTIUNDto } from './dto/usuarioTIUN.dto';
import {UsuarioTIUN} from "./entities/usuariotiun.entity";

@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly usuarioService: UsuarioService){}

    @Get('usuarios-tiun')
    findAll(): Promise<UsuarioTIUN[]> {
        return this.usuarioService.findAllUsuarioTIUN();
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
