import {Injectable} from "@nestjs/common";
import {UbicacionPrestadorDto} from "./dto/ubicacionPrestador.dto";
import {getCustomRepository} from "typeorm";
import {PrestadorRepository} from "../usuarios/repositories/prestador.repository";
import {UbicacionPrestador} from "./entities/ubicacionPrestador.entity";
import {UbicacionPrestadorRepository} from "./ubicacion-prestador.repository";

@Injectable()
export class UbicacionPrestadorService {
    constructor(){}

    private async getPrestadorById(presId: number) {
        const prestadorRepository = getCustomRepository(PrestadorRepository);
        return await prestadorRepository.getById(presId);
    }

    async createUbicacionPrestador(presId: number, ubicacion: UbicacionPrestadorDto) {
        let prestador = await this.getPrestadorById(presId);
        if(prestador == null) {
            // TODO: Idear mejores respuestas para las fallas
            console.log('No hay prestador con ese id');
        } else {
            let nuevaUbicacion = new UbicacionPrestador(prestador, ubicacion.latitud, ubicacion.longitud, ubicacion.detalles);
            const ubicacionRepository = getCustomRepository(UbicacionPrestadorRepository);
            return await ubicacionRepository.createUbicacion(nuevaUbicacion);
        }
    }

    async getUbicacionById(locId: number) {
        const ubicacionRepository = getCustomRepository(UbicacionPrestadorRepository);
        return await ubicacionRepository.getUbicacionById(locId);
    }

    async findUbicacionesByPrestador(presId: number) {
        let prestador = await this.getPrestadorById(presId);
        if(prestador == null || prestador == undefined) {
            // TODO: Idear mejores respuestas para las fallas
            console.log('No hay prestador con ese id');
        } else {
            const ubicacionRepository = getCustomRepository(UbicacionPrestadorRepository);
            return await ubicacionRepository.findUbicacionesByPrestador(prestador);
        }
    }

    async findAllUbicaciones() {
        const ubicacionRepository = getCustomRepository(UbicacionPrestadorRepository);
        return await ubicacionRepository.findAllUbicaciones();
    }
}