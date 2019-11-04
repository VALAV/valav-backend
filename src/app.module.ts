import { Module } from '@nestjs/common';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './assets/js/db.config';
import { UsuarioService } from './services/usuario/usuario.service';


@Module({
  imports: [TypeOrmModule.forRoot(config), UsuariosModule],
  controllers: [],
  providers: [UsuarioService],
})
export class AppModule {}
