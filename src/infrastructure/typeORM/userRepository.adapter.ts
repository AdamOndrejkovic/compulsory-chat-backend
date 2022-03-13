import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../domain/borders/userRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../../core/user.entity';
import { UserSchema } from './user.schema';

@Injectable()
export class UserRepositoryAdapter implements IUserRepository {
  private readonly userRepository: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepository = em.getRepository(UserSchema);
  }

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepository.save({
      name: name,
      email: email,
      password: password,
    });
  }

  login(email: string, password: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email: email,
        password: password,
      },
    });
  }

  async getFriends(user: User): Promise<User[]> {
    const list: User[] = [];
    for (const friend of user.userList) {
      list.push(await this.getFriendById(friend));
    }

    return list;
  }

  getFriendById(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
