import {TipoPrestadorService} from "./tipo-prestador.service";
import {Controller, Get} from "@nestjs/common";

@Controller('tipo-prestador')
export class TipoPrestadorController {
    constructor(private readonly tipoPresService: TipoPrestadorService) {}

    @Get()
    findAllTipoPrestadores() {
        return this.tipoPresService.findAllTipoPrestadores();
    }
}