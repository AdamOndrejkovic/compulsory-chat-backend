import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsModule } from './chats/chats.module';
import { RoomModule } from './room/room.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/chat.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ChatsModule,
    RoomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
