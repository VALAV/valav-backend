import {Module} from "@nestjs/common";
import {UbicacionPrestadorService} from "./ubicacion-prestador.service";
import {UbicacionPrestadorController} from "./ubicacion-prestador.controller";

@Module({
    providers: [UbicacionPrestadorService],
    controllers: [UbicacionPrestadorController]
})

export class UbicacionPrestadorModule {}