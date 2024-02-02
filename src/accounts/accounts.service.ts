import { Injectable } from '@nestjs/common';
import { Account } from './accounts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private readonly accountRepository: Repository<Account>,
      ) {}

      async createAccount(username: string, password: string, email: string): Promise<Account> {
        const account = this.accountRepository.create({ 
            username, password, email, created_on: new Date(), last_login: new Date() 
        });
        return this.accountRepository.save(account);
      }
    
      async getAllPolls(): Promise<Account[]> {
        return this.accountRepository.find();
      }
}
