import { Module } from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UsuariosModule} from '../usuarios/usuarios.module';
import {JwtModule} from '@nestjs/jwt';
import { TokenMiddleware } from './token.middleware';
import * as dotenv from 'dotenv';


dotenv.config();

const SECRET = process.env.JWT_SECRET;
const EXP_TIME = process.env.EXP_TIME;

@Module({
  imports: [JwtModule.register(
      {
                secret: SECRET,
                signOptions: {
                  expiresIn: EXP_TIME
                }
              }),
    UsuariosModule],
  controllers: [AuthController],
  providers: [AuthService, TokenMiddleware]
})
export class AuthModule {}
