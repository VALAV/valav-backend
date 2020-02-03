import {EntityRepository, Repository} from "typeorm";
import {TipoPrestador} from "./entities/tipoPrestador.entity";

@EntityRepository(TipoPrestador)
export class TipoPrestadorRepository extends Repository<TipoPrestador> {
    async findAllTipoPrestadores() {
        return await this.find();
    }
}