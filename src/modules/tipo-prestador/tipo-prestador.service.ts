import {Injectable} from "@nestjs/common";
import {getCustomRepository} from "typeorm";
import {TipoPrestadorRepository} from "./tipo-prestador.repository";

@Injectable()
export class TipoPrestadorService {
    async findAllTipoPrestadores() {
        const tipoPresRepository = getCustomRepository(TipoPrestadorRepository);
        return await tipoPresRepository.findAllTipoPrestadores();
    }
}