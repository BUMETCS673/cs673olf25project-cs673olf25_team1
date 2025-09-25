import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../entities/account.entity';

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
}