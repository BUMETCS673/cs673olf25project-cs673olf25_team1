// src/authentication/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './service';
import { AuthController } from './controller';
import { AccountService } from '../services/account.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../entities/account.entity';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([Account]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AccountService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}