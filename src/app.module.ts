import { Module } from '@nestjs/common';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './assets/js/db.config';
import { UsuarioService } from './modules/usuarios/usuario.service';
import { AuthModule } from './modules/auth/auth.module';
import { RolModule } from './modules/rol/rol.module';
import { TipoDocumentoModule } from './modules/tipo-documento/tipo-documento.module';
import { AuthService } from "./modules/auth/auth.service";
import { JwtModule } from "@nestjs/jwt";
import * as dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET;
const EXP_TIME = process.env.EXP_TIME;

@Module({
  imports: [TypeOrmModule.forRoot(config),
            JwtModule.register({secret: SECRET,
                signOptions: { expiresIn: EXP_TIME}
            }),
            UsuariosModule,
            AuthModule,
            RolModule,
            TipoDocumentoModule],
  controllers: [],
  providers: [UsuarioService, AuthService],
})
export class AppModule {}
