import { Module } from '@nestjs/common';
import {TipoPrestadorService} from "./tipo-prestador.service";
import {TipoPrestadorController} from "./tipo-prestador.controller";

@Module({
    providers: [TipoPrestadorService],
    controllers: [TipoPrestadorController]
})
export class TipoPrestadorModule {}
