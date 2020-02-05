import {EntityRepository, Repository} from "typeorm";
import {EstadoTransaccion} from "./entities/estado-transaccion.entity";

@EntityRepository(EstadoTransaccion)
export class EstadoTransaccionRepository extends Repository<EstadoTransaccion> {
    async getEstadoById(estadoId: number) {
        return await this.findOne({id: estadoId});
    }

    async findAllEstados() {
        return await this.find();
    }
}