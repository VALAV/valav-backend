import {Injectable} from "@nestjs/common";
import {getCustomRepository} from "typeorm";
import {EstadoTransaccionRepository} from "./estado-transaccion.repository";

@Injectable()
export class EstadoTransaccionService {
    constructor() {}

    async getEstadoById(estadoId: number) {
        const estadoRepository = getCustomRepository(EstadoTransaccionRepository);
        return await estadoRepository.getEstadoById(estadoId);
    }

    async findAllEstados() {
        const estadoRepository = getCustomRepository(EstadoTransaccionRepository);
        return await estadoRepository.findAllEstados();
    }
}