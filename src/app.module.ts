import { Module } from '@nestjs/common';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './assets/js/db.config';
import { UsuarioService } from './modules/usuarios/usuario.service';
import { AuthModule } from './modules/auth/auth.module';
import { RolModule } from './modules/rol/rol.module';
import { TipoDocumentoModule } from './modules/tipo-documento/tipo-documento.module';


@Module({
  imports: [TypeOrmModule.forRoot(config), UsuariosModule, AuthModule, RolModule, TipoDocumentoModule],
  controllers: [],
  providers: [UsuarioService],
})
export class AppModule {}
