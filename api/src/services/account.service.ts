// account.service.ts
import { ConflictException, Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../entities/account.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(Account)
        private readonly accountRepository: Repository<Account>,
    ) { }

    async insertAccount(username: string, password: string, fullname: string) {
        const account = this.accountRepository.create({
            username,
            password,
            fullname,
        });
        return this.accountRepository.save(account);
    }

  async findByUsername(username: string): Promise<Account | null> {
    return this.accountRepository.findOne({ where: { username } });
  }

  async register(username: string, password: string, fullname: string): Promise<Account> {
    const existing = await this.findByUsername(username);
    if (existing) {
      throw new ConflictException('Username already exists');
    }

    const complexityRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!complexityRegex.test(password)) {
      throw new BadRequestException(
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character (@ $ ! % * ? &).'
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const account = this.accountRepository.create({
      username,
      password: hashedPassword,
      fullname,
    });

    return this.accountRepository.save(account);
  }

  async updateProfile(username: string, updateData: Partial<Account>) {
    const user = await this.accountRepository.findOne({ where: { username } });
    if (!user) throw new Error('User not found');

    // Only update the fields that exist in updateData
    user.displayName = updateData.displayName ?? user.displayName;
    user.avatar = updateData.avatar ?? user.avatar;
    user.themeColor = updateData.themeColor ?? user.themeColor;

    return this.accountRepository.save(user);
  }

}

