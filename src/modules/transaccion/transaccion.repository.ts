import {EntityRepository, Repository} from "typeorm";
import {Transaccion} from "./entities/transaccion.entity";

@EntityRepository(Transaccion)
export class TransaccionRepository extends Repository<Transaccion> {
    async saveOrUpdate(transaction: Transaccion) {
        console.log(transaction);
        return await this.save(transaction);
    }
}