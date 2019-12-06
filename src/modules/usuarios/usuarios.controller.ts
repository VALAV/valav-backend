import {Controller, Get, Post, Param, Body} from '@nestjs/common';
import {UsuarioService} from './usuario.service';
import { UsuarioTIUNDto } from './dto/usuarioTIUN.dto';
import {UsuarioTIUN} from "./entities/usuariotiun.entity";
import {Usuario} from "./entities/usuario.entity";


@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly usuarioService: UsuarioService){}
    @Get('')
    findAllUsuarios(): Promise<Usuario[]> {
        return this.usuarioService.findAllUsuarios();
    }

    @Get('tiun')
    findAllUsuariosTIUN(): Promise<UsuarioTIUN[]> {
        return this.usuarioService.findAllUsuariosTIUN();
    }

    @Get('prestador')
    findPrestadores(): Promise<UsuarioTIUN[]> {
        return this.usuarioService.findAllUsuariosTIUN();
    }

    @Get(':id')
    findById(@Param() params): string {
        return this.usuarioService.findById(params.id);
    }

    @Post('tiun')
    createUsuarioTIUN(@Body() usuarioTIUN: UsuarioTIUNDto) {
        return this.usuarioService.createUsuarioTIUN(usuarioTIUN);
    }
}
