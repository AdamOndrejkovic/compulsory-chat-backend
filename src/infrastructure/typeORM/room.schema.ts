import { EntitySchema } from 'typeorm';
import { Room } from '../../core/room.entity';

export const RoomSchema = new EntitySchema<Room>({
  name: 'Room',
  target: Room,
  columns: {
    id: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    name: {
      type: 'varchar',
    },
    createdBy: {
      type: 'varchar',
    },
  },
});
