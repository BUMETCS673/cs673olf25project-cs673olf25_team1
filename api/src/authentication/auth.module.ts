// authentication/auth.module.ts

// AI-generated-code: 10% (AI chat link: https://chatgpt.com/s/t_68d833b25f508191b0a9210a3c28a559)
// Human code: 90%

import { Module } from '@nestjs/common';
import { AuthService } from './service';
import { AuthController } from './controller';
import { AccountService } from '../services/account.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../entities/account.entity';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Account]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AccountService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}