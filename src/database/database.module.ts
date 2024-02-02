import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../accounts/accounts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'rafa',
      password: 'mysecretpassword',
      database: 'postgres',
      entities: [Account],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Account]),
  ],
  exports: [TypeOrmModule]
})
export class DatabaseModule {}
