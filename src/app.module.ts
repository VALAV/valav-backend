import { Module } from '@nestjs/common';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './assets/js/db.config';
import { UsuarioService } from './services/usuario/usuario.service';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot(config), UsuariosModule, AuthModule],
  controllers: [],
  providers: [UsuarioService],
})
export class AppModule {}
