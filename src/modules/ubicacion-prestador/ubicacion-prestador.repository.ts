import {EntityRepository, Repository} from "typeorm";
import {UbicacionPrestador} from "./entities/ubicacionPrestador.entity";

@EntityRepository(UbicacionPrestador)
export class UbicacionPrestadorRepository extends Repository<UbicacionPrestador> {
    async createUbicacion (ubicacion: UbicacionPrestador) {
        return await this.save(ubicacion);
    }
}