import {EntityRepository, Repository} from "typeorm";
import {UbicacionPrestador} from "./entities/ubicacionPrestador.entity";
import {Prestador} from "../usuarios/entities/prestador.entity";

@EntityRepository(UbicacionPrestador)
export class UbicacionPrestadorRepository extends Repository<UbicacionPrestador> {
    async createUbicacion (ubicacion: UbicacionPrestador) {
        return await this.save(ubicacion);
    }

    async getUbicacionById(locId: number) {
        return await this.findOne({id: locId});
    }

    async findUbicacionesByPrestador(pres: Prestador) {
        return await this.find({prestador: pres});
    }

    async findAllUbicaciones() {
        return await this.find();
    }
}