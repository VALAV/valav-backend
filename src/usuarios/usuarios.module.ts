import { Module } from '@nestjs/common';
import {AppService} from "../app.service";
import {UsuariosController} from "./usuarios.controller";

@Module({
    imports: [],
    controllers: [UsuariosController],
    providers: [],
})
export class UsuariosModule {}
