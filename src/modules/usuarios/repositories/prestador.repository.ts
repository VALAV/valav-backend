import { EntityRepository, Repository } from 'typeorm';
import {Prestador} from "../entities/prestador.entity";

@EntityRepository(Prestador)
export class PrestadorRepository extends Repository<Prestador>{
    async findAll(): Promise<Prestador[]> {
        return await this.find();
    }
}