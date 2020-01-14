import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response} from 'express';
import {AuthService} from './auth.service';

const ACCESS_TOKEN = 'access_token';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) {}
    async use(req: Request, res: Response, next: Function) {
        const queryParams = req.query;
        if (!Object.keys(queryParams).includes(ACCESS_TOKEN)) {
            return res.status(401).json({message: 'Unauthorized'});
        } else {
            const decoded = await this.authService.verifyJWT(queryParams[ACCESS_TOKEN]);
            console.log(decoded);
        }
        console.log('\n-------------------------------\n');
        //console.log(res);
        next();
    }
}
