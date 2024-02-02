import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountService: AccountsService) {}

    @Post()
    createPoll(@Body() {username, password, email}: { username: string, password: string, email: string}) {
      return this.accountService.createAccount(username, password, email);
    }
  
    @Get(':id')
    getAllPolls(@Param('id') id: string) {
        console.log(id)
      return this.accountService.getAllPolls();
    }
}
