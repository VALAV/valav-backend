import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './assets/js/db.config';


@Module({
  imports: [TypeOrmModule.forRoot(config), UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
