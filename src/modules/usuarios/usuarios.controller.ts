import {Controller, Get, Post, Param, Body} from '@nestjs/common';
import {UsuarioService} from './usuario.service';
import { UsuarioTIUNDto } from './dto/usuarioTIUN.dto';
import {UsuarioTIUN} from "./entities/usuariotiun.entity";
import {Usuario} from "./entities/usuario.entity";
import { PrestadorDto } from './dto/prestador.dto';
import { EquivalenciasDto } from './dto/equivalencias.dto';


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

    @Post('prestador')
    createPrestador(@Body() prestador: PrestadorDto) {
        return this.usuarioService.createPrestador(prestador);
    }

    @Get('prestador/:id/equivalencias')
    getEquivalenciaByPrestador(@Param() params) {
        return this.usuarioService.getEquivalenciasByPrestador(params.id);
    }

    @Post('prestador/:id/equivalencias')
    setNuevasEquivalencias(@Param() params, @Body() equivalencias : EquivalenciasDto) {
        return this.usuarioService.setNuevasEquivalencias(params.id, equivalencias);
    }
}
