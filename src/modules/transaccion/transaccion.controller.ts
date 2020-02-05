import {Body, Controller, Post} from "@nestjs/common";
import {TransaccionService} from "./transaccion.service";
import {TransaccionAsignarDto} from "./dto/transaccionAsignar.dto";

@Controller('transaccion')
export class TransaccionController {
    constructor(private readonly transaccionService: TransaccionService){}
    @Post('asignar')
    createTransaccionAsignar(@Body() transaccion: TransaccionAsignarDto) {
        return this.transaccionService.createTransaccion(transaccion);
    }
}