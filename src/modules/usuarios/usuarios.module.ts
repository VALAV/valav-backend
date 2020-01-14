import { Module, NestModule, MiddlewareConsumer, forwardRef } from '@nestjs/common';
import {UsuariosController} from './usuarios.controller';
import {UsuarioService} from './usuario.service';
import {RolModule} from "../rol/rol.module";


@Module({
    imports: [RolModule],
    controllers: [UsuariosController],
    providers: [UsuarioService],
    exports: [UsuarioService]
})
export class UsuariosModule {}
