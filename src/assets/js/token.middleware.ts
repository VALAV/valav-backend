import {Injectable, NestMiddleware} from "@nestjs/common";
import {Request, Response} from 'express';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log(req.query);
        console.log('\n-------------------------------\n');
        //console.log(res);
        next();
    }
}
