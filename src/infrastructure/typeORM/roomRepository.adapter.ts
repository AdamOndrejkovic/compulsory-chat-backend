import { Injectable } from '@nestjs/common';
import { IRoomRepository } from '../../domain/borders/roomRepository.interface';
import { Room } from '../../core/room.entity';
import { EntityManager, Repository } from 'typeorm';
import { RoomSchema } from './room.schema';

@Injectable()
export class RoomRepositoryAdapter implements IRoomRepository {
  private readonly roomRepository: Repository<Room>;

  constructor(private readonly em: EntityManager) {
    this.roomRepository = em.getRepository(RoomSchema);
  }

  create(name: string, createdBy: string): Promise<Room> {
    return this.roomRepository.save({
      name: name,
      createdBy: createdBy,
    });
  }

  getRooms(): Promise<Room[]> {
    return this.roomRepository.find();
  }
}
