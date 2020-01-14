import {Injectable} from "@nestjs/common";
import {Rol} from "./entities/rol.entity";
import {getCustomRepository} from "typeorm";
import {RolRepository} from "./rol.repository";

@Injectable()
export class RolService {

    async getRolById(rolId: number): Promise<Rol> {
        const rolRepository = getCustomRepository(RolRepository);
        return await rolRepository.getRolById(rolId);
    }

    syncGetRolById(rolId: number): Rol {
        const rolRepository = getCustomRepository(RolRepository);
        return rolRepository.syncGetRolById(rolId);
    }
}