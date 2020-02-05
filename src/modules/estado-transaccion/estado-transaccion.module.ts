import {Module} from "@nestjs/common";
import {EstadoTransaccionService} from "./estado-transaccion.service";

@Module({
    providers: [EstadoTransaccionService],
    exports: [EstadoTransaccionService]
})
export class EstadoTransaccionModule {}
