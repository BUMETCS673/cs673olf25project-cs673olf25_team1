// account.controller.ts

// AI-generated-code: 90% (AI chat link: https://chatgpt.com/c/68e1f2df-6aa0-8328-8609-1a8f0ad25221)
// Human code: 10% 

import { Controller, Get, Put, Body, Req, UseGuards } from '@nestjs/common';
import { AccountService } from './services/account.service';
import { Account } from './entities/account.entity';
import { JwtAuthGuard } from './authentication/jwt-auth.guard';
import { UnauthorizedException } from '@nestjs/common';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Req() req: any) {
    const username = req.user?.username; // optional chaining
    if (!username) {
      throw new UnauthorizedException('User not found in request');
    }

    const user = await this.accountService.findByUsername(username);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      username: user.username,
      fullname: user.fullname,
      displayName: user.displayName,
      avatar: user.avatar,
      themeColor: user.themeColor,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put('me')
  async updateMyProfile(@Req() req: any, @Body() updateData: Partial<Account>) {
    const username = req.user?.username;
    if (!username) {
      throw new UnauthorizedException('User not found in request');
    }

    const updatedUser = await this.accountService.updateProfile(username, updateData);
    if (!updatedUser) {
      throw new UnauthorizedException('Failed to update user');
    }

    return {
      username: updatedUser.username,
      fullname: updatedUser.fullname,
      displayName: updatedUser.displayName,
      avatar: updatedUser.avatar,
      themeColor: updatedUser.themeColor,
    };
  }

}