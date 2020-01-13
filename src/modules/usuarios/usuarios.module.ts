import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import {UsuariosController} from './usuarios.controller';
import {UsuarioService} from './usuario.service';
import {TokenMiddleware} from "../../assets/js/token.middleware";

@Module({
    imports: [],
    controllers: [UsuariosController],
    providers: [UsuarioService],
    exports: [UsuarioService]
})
export class UsuariosModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(TokenMiddleware)
            .forRoutes('usuarios');
    }
}
