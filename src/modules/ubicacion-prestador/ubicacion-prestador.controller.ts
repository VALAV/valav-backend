import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {UbicacionPrestadorDto} from "./dto/ubicacionPrestador.dto";
import {UbicacionPrestadorService} from "./ubicacion-prestador.service";

@Controller('ubicacion')
export class UbicacionPrestadorController {
    constructor(private readonly ubicacionPrestadorService: UbicacionPrestadorService){}

    @Post('prestador/:id')
    createUbicacionPrestador(@Param() params, @Body() ubicacionPrestador: UbicacionPrestadorDto) {
        return this.ubicacionPrestadorService.createUbicacionPrestador(params.id, ubicacionPrestador);
    }

    @Get(':id')
    getUbicacionById(@Param() params) {
        return this.ubicacionPrestadorService.getUbicacionById(params.id);
    }

    @Get('prestador/:id')
    findUbicacionesByPrestador(@Param() params) {
        return this.ubicacionPrestadorService.findUbicacionesByPrestador(params.id);
    }

    @Get()
    findAllUbicaciones() {
        return this.ubicacionPrestadorService.findAllUbicaciones();
    }


}