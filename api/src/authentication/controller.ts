// authentication.controller.ts
import { Controller, Post, UseGuards, Request, Body, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './service';
import { AccountService } from '../services/account.service';

@Controller('authentication')
export class AuthController {
  constructor(
    private authService: AuthService,
    private accountService: AccountService,
  ) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string; fullname: string }) {
    try {
      const user = await this.accountService.register(
        body.username,
        body.password,
        body.fullname
      );
      return { message: 'User registered', user: { username: user.username, fullname: user.fullname } };
    } catch (err) {
      console.error('Register error:', err);
      throw err; 
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return { user: req.user };
  }
}
