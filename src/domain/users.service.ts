import { User } from '../core/user.entity';
import { IUserRepository } from './borders/userRepository.interface';

export class UsersService {
  constructor(private readonly userRepository: IUserRepository) {}

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepository.create(name, email, password);
  }

  login(email: string, password: string): Promise<User> {
    return this.userRepository.login(email, password);
  }

  getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
