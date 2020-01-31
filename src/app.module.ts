import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {UsuariosModule} from './modules/usuarios/usuarios.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {config} from './assets/js/db.config';
import {UsuarioService} from './modules/usuarios/usuario.service';
import {AuthModule} from './modules/auth/auth.module';
import {RolModule} from './modules/rol/rol.module';
import {TipoDocumentoModule} from './modules/tipo-documento/tipo-documento.module';
import {AuthService} from './modules/auth/auth.service';
import {JwtModule} from '@nestjs/jwt';
import {TokenMiddleware} from './modules/auth/token.middleware';
import {UsuariosController} from './modules/usuarios/usuarios.controller';
import {RolService} from './modules/rol/rol.service';
import { TipoPrestador } from './modules/tipo-prestador/entities/tipoPrestador.entity';
import { SectorPrestadorModule } from './modules/sector-prestador/sector-prestador.module';
import { ProductoModule } from './modules/producto/producto.module';
import * as dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET;
const EXP_TIME = process.env.EXP_TIME;

@Module({
  imports: [TypeOrmModule.forRoot(config),
            JwtModule.register({secret: SECRET,
                signOptions: { expiresIn: EXP_TIME}
            }),
            UsuariosModule, AuthModule, RolModule, TipoDocumentoModule,
            TipoPrestador, SectorPrestadorModule, ProductoModule],
  controllers: [],
  providers: [UsuarioService, AuthService, RolService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(TokenMiddleware)
        .exclude(
          {path: 'usuarios/tiun', method: RequestMethod.POST},
                 {path: 'usuarios/prestador', method: RequestMethod.POST}
        )
        .forRoutes(UsuariosController);
  }
}
