import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {TransaccionService} from "./transaccion.service";
import {TransaccionAsignarDto} from "./dto/transaccionAsignar.dto";
import { TransaccionRedimirDto } from './dto/transaccionRedimir.dto';

@Controller('transaccion')
export class TransaccionController {
    constructor(private readonly transaccionService: TransaccionService){}
    @Post('asignar')
    createTransaccionAsignar(@Body() transaccion: TransaccionAsignarDto) {
        return this.transaccionService.createTransaccionAsignar(transaccion);
    }

    @Post('redimir')
    createTransaccionRedimir(@Body() transaccion: TransaccionRedimirDto) {
        return this.transaccionService.createTransaccionRedimir(transaccion);
    }

    @Get('tipo/:tipoId/fecha/:fecha')
    findTransacciones(@Param() params) {
            return this.transaccionService.findTransaacionesByTipoAndFecha(params.tipoId, +params.fecha);
    }
}
