import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomController } from './room.controller';
import { IRoomRepository } from '../domain/borders/roomRepository.interface';
import { RoomService } from '../domain/room.service';
import { RoomRepositoryAdapter } from '../infrastructure/typeORM/roomRepository.adapter';
import { RoomSchema } from '../infrastructure/typeORM/room.schema';

@Module({
  imports: [TypeOrmModule.forFeature([RoomSchema])],
  controllers: [RoomController],
  providers: [
    {
      provide: 'RoomRepository',
      useClass: RoomRepositoryAdapter,
    },
    {
      inject: ['RoomRepository'],
      provide: 'RoomService',
      useFactory: (roomRepository: IRoomRepository) =>
        new RoomService(roomRepository),
    },
  ],
})
export class RoomModule {}
