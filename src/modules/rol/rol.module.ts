import { Module } from '@nestjs/common';
import {RolService} from "./rol.service";

@Module({
    providers: [RolService],
    exports: [RolService]
})
export class RolModule {}
