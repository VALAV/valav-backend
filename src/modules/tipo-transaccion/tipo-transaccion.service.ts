import {Injectable} from "@nestjs/common";
import {getCustomRepository} from "typeorm";
import {TipoTransaccion} from "./entities/tipo-transaccion.entity";
import {TipoTransaccionRepository} from "./tipo-transaccion.repository";

@Injectable()
export class TipoTransaccionService {
    constructor(){}

    async getTipoById(tipoId: number) {
        const tipoRepository = getCustomRepository(TipoTransaccionRepository);
        return await tipoRepository.getTipoById(tipoId);
    }

    async findAllTipos() {
        const tipoRepository = getCustomRepository(TipoTransaccionRepository);
        return await tipoRepository.findAllTipos();
    }
}