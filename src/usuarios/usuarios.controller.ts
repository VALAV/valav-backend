import {Controller, Get, Post, Param, Body} from "@nestjs/common";
import {CreateUsuarioDto} from "./dto/create-usuario.dto";

@Controller('usuarios')
export class UsuariosController {
    @Get()
    findAll(): string {
        return 'Todos los usuarios';
    }

    @Get(':id')
    findById(@Param() params): string {
        return `Regresa usuario con el id ${params.id}`;
    }

    @Post()
    create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return `Esto acaba de crear un usuario llamado ${createUsuarioDto.nombre_usuario} con contraseña ${createUsuarioDto.password}`;
    }
}