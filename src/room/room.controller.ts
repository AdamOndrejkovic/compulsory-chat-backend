import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from '../core/room.entity';
import { RoomService } from '../domain/room.service';

@Controller('room')
export class RoomController {
  constructor(
    @Inject('RoomService') private readonly roomService: RoomService,
  ) {}

  @Post('/create')
  create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomService.create(createRoomDto.name, createRoomDto.createdBy);
  }

  @Get('/rooms')
  getRooms(): Promise<Room[]> {
    return this.roomService.getRooms();
  }
}
