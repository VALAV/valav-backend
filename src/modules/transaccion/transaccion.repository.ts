import {EntityRepository, Repository} from "typeorm";
import {Transaccion} from "./entities/transaccion.entity";

@EntityRepository(Transaccion)
export class TransaccionRepository extends Repository<Transaccion> {
    
}