import {EntityRepository, Repository} from "typeorm";
import {TipoTransaccion} from "./entities/tipo-transaccion.entity";

@EntityRepository(TipoTransaccion)
export class TipoTransaccionRepository extends Repository<TipoTransaccion> {
    async getTipoById(tipoId: number) {
        return await this.findOne({id: tipoId});
    }

    async findAllTipos() {
        return await this.find();
    }
}