import { Module } from '@nestjs/common';
import {UsuariosController} from './usuarios.controller';
import {UsuarioService} from '../../services/usuario/usuario.service';

@Module({
    imports: [],
    controllers: [UsuariosController],
    providers: [UsuarioService],
})
export class UsuariosModule {}
