import { IRoomRepository } from './borders/roomRepository.interface';
import { Room } from '../core/room.entity';

export class RoomService {
  constructor(private readonly roomRepository: IRoomRepository) {}

  create(name: string, createdBy: string): Promise<Room> {
    return this.roomRepository.create(name, createdBy);
  }

  getRooms(): Promise<Room[]> {
    return this.roomRepository.getRooms();
  }
}
