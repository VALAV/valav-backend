import {Module} from "@nestjs/common";
import {TransaccionController} from "./transaccion.controller";
import {TransaccionService} from "./transaccion.service";
import {EstadoTransaccionModule} from "../estado-transaccion/estado-transaccion.module";
import {TipoTransaccionModule} from "../tipo-transaccion/tipo-transaccion.module";
import {PuntosUsuarioModule} from "../puntos-usuario/puntos-usuario.module";
import {UsuariosModule} from "../usuarios/usuarios.module";

@Module({
    controllers: [TransaccionController],
    providers: [TransaccionService],
    imports: [EstadoTransaccionModule, TipoTransaccionModule, PuntosUsuarioModule, UsuariosModule]
})
export class TransaccionModule {}