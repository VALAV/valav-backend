import { Module, NestModule, MiddlewareConsumer, forwardRef } from '@nestjs/common';
import {UsuariosController} from './usuarios.controller';
import {UsuarioService} from './usuario.service';

@Module({
    imports: [],
    controllers: [UsuariosController],
    providers: [UsuarioService],
    exports: [UsuarioService]
})
export class UsuariosModule {}
