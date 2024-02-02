import { Controller, Get, Param } from '@nestjs/common';

@Controller('app')
export class AppController {
  constructor() {}

  @Get('sum/:id')
  getHello(@Param('id') param: string) {
    console.log(param)
    return param
  }
}
