import {Module} from "@nestjs/common";
import {PuntosUsuarioService} from "./puntos-usuario.service";
import { UsuariosModule } from '../usuarios/usuarios.module';
import { PuntosUsuarioController } from './puntos-usuario.controller';

@Module({
    controllers: [PuntosUsuarioController],
    providers: [PuntosUsuarioService],
    exports: [PuntosUsuarioService],
    imports: [UsuariosModule]
})
export class PuntosUsuarioModule{}
