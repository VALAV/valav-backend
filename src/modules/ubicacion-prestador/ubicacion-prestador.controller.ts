import {Body, Controller, Param, Post} from "@nestjs/common";
import {UbicacionPrestadorDto} from "./dto/ubicacionPrestador.dto";
import {UbicacionPrestadorService} from "./ubicacion-prestador.service";

@Controller('ubicacion')
export class UbicacionPrestadorController {
    constructor(private readonly ubicacionPrestadorService: UbicacionPrestadorService){}

    @Post('prestador/:id')
    createUbicacionPrestador(@Param() params, @Body() ubicacionPrestador: UbicacionPrestadorDto) {
        return this.ubicacionPrestadorService.createUbicacionPrestador(params.id, ubicacionPrestador);
    }
}