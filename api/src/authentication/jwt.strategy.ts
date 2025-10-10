// authentication/jwt.strategy.ts

// AI-generated-code: 90% (AI chat link: https://chatgpt.com/s/t_68d833b25f508191b0a9210a3c28a559)
// Human code: 10% 

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import 'dotenv/config';

interface JwtPayload {
  sub: string;
  fullname: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET!,
    });
  }

  async validate(payload: JwtPayload) {
    return { username: payload.sub, fullname: payload.fullname };
  }
}