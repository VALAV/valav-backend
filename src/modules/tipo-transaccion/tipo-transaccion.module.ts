import {Module} from "@nestjs/common";
import {TipoTransaccionService} from "./tipo-transaccion.service";

@Module({
    providers: [TipoTransaccionService],
    exports: [TipoTransaccionService]
})
export class TipoTransaccionModule {}