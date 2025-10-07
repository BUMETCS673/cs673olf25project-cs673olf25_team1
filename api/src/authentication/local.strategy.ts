// authentication/local.strategy.ts

// AI-generated-code: 100% (AI chat link: https://chatgpt.com/s/t_68d833b25f508191b0a9210a3c28a559)
// Human code: 0% 

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'username' });
  }

  async validate(username: string, password: string) {
    const user = await this.authService.validateUser(username, password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return user;
  }
}