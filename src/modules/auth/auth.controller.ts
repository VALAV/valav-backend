import {Body, Controller, Post} from "@nestjs/common";
import {LoginDataDto} from "./dto/loginData.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async loginUser(@Body() loginData: LoginDataDto) {
        return await this.authService.loginUser(loginData);
    }
}