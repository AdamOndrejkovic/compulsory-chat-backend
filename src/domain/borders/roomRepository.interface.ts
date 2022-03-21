import { Room } from '../../core/room.entity';

export interface IRoomRepository {
  create(name: string, createdBy: string): Promise<Room>;

  getRooms(): Promise<Room[]>;
}
