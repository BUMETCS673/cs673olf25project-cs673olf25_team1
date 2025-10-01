// authentication.service.ts
import { Injectable } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Account } from '../entities/account.entity';

@Injectable()
export class AuthService {
  constructor(private accountService: AccountService) {}

  async validateUser(username: string, password: string): Promise<Account | null> {
    const user = await this.accountService.findByUsername(username);
    if (!user) return null;
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : null;
  }

  login(user: Account) {
    const payload = { sub: user.username, fullname: user.fullname };
    const secret = process.env.JWT_SECRET!;
    const accessToken = jwt.sign(payload, secret, { expiresIn: '1h' });
    return { accessToken, user: { username: user.username, fullname: user.fullname } };
  }
}