import { Injectable } from '@nestjs/common';
import {LoginDataDto} from './dto/loginData.dto';
import {UsuarioService} from '../usuarios/usuario.service';
import {TokenResponseDto} from './dto/tokenResponse.dto';
import {JwtService} from '@nestjs/jwt';
import {comparePassword} from '../../assets/js/pass.utils';
import * as dotenv from 'dotenv';

dotenv.config();

const EXP_TIME = process.env.EXP_TIME;

@Injectable()
export class AuthService {
    constructor(private readonly usuarioService: UsuarioService,
                private readonly jwtService: JwtService) {}

    async loginUser(loginData: LoginDataDto): Promise<TokenResponseDto> {
        const usuarios = await this.usuarioService.findUsuarioByEmail(loginData.email);
        if (usuarios.length === 0 || !usuarios[0].habilitado) {
            // TODO: Regresar 401
            console.log('NO se encontro usuario o no esta autorizado');
            return;
        } else {
          const usuario = usuarios.pop();
          const isPasswordCorrect = await comparePassword(loginData.password, usuario.password);
          if (isPasswordCorrect) {
              console.log(usuario);
              return this.createJWT({email: loginData.email, rol: usuario.rol.id});
          } else {
              console.log('Contraseña no cuadra');
          }
        }
    }

    private createJWT(payload: object): TokenResponseDto {
        const token = this.jwtService.sign(payload);
        return new TokenResponseDto(token, EXP_TIME);
    }

    async verifyJWT(token: string): Promise<object> {
        return new Promise(resolve => {
           this.jwtService.verifyAsync(token)
               .then(decoded => resolve(decoded))
               .catch(err => resolve(err))
        });
    }
}
