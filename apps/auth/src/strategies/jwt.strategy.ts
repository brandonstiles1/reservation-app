import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
<<<<<<< HEAD
=======
import { Request } from 'express';
>>>>>>> 496605149c52120febe49bba1acbfcb5c97b97c1
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenPayload } from '../interfaces/token-payload.interface';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
<<<<<<< HEAD
        (request: any) =>
          request?.cookies?.Authentication || request?.Authentication,
=======
        (request: Request) => request?.cookies?.Authentication,
>>>>>>> 496605149c52120febe49bba1acbfcb5c97b97c1
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate({ userId }: TokenPayload) {
    return this.usersService.getUser({ _id: userId });
  }
}
