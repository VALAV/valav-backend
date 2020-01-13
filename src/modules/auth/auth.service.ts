import {Injectable} from "@nestjs/common";
import {LoginDataDto} from "./dto/loginData.dto";
import {UsuarioService} from "../usuarios/usuario.service";
import {TokenResponseDto} from "./dto/tokenResponse.dto";
import {JwtService} from "@nestjs/jwt";
import {comparePassword} from "../../assets/js/pass.utils";

const EXP_TIME = "5m";

@Injectable()
export class AuthService {
    constructor(private readonly usuarioService: UsuarioService,
                private readonly jwtService: JwtService) {}

    async loginUser(loginData:LoginDataDto): Promise<TokenResponseDto> {
        const usuarios = await this.usuarioService.findUsuarioByEmail(loginData.email);
        if(usuarios.length === 0 || !usuarios[0].habilitado) {
            // TODO: Regresar 401
            console.log('NO se encontro usuario o no esta autorizado');
            return;
        } else {
          let usuario = usuarios.pop();
          let isPasswordCorrect = await comparePassword(loginData.password, usuario.password);
          if(isPasswordCorrect) {
              return this.createJWT({email: loginData.email});
          } else {
              console.log('Contraseña no cuadra');
          }
        }
    }

    private createJWT(payload: object): TokenResponseDto {
        let token = this.jwtService.sign(payload);
        return new TokenResponseDto(token, EXP_TIME);
    }
}