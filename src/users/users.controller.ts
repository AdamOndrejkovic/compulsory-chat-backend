import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from '../core/user.entity';
import { UsersService } from '../domain/users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService,
  ) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Post('/login')
  login(@Body() loginUser: LoginUserDto): Promise<User> {
    return this.usersService.login(loginUser.email, loginUser.password);
  }

  @Get('/users')
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}
