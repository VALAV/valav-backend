import {Module} from "@nestjs/common";
import {PuntosUsuarioService} from "./puntos-usuario.service";

@Module({
    providers: [PuntosUsuarioService],
    exports: [PuntosUsuarioService]
})
export class PuntosUsuarioModule{}