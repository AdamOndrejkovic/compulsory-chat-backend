import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UserSchema } from '../infrastructure/typeORM/user.schema';
import { UserRepositoryAdapter } from '../infrastructure/typeORM/userRepository.adapter';
import { IUserRepository } from '../domain/borders/userRepository.interface';
import { UsersService } from '../domain/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepositoryAdapter,
    },
    {
      inject: ['UserRepository'],
      provide: 'UsersService',
      useFactory: (userRepository: IUserRepository) =>
        new UsersService(userRepository),
    },
  ],
})
export class UsersModule {}
