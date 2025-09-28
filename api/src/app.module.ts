import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppSocketGateway } from './app-socket/app-socket.gateway';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AccountService } from './services/account.service';
import { UserMessagesReceivedService } from './services/user_messages_recieved.service';
import { MessageService } from './services/message.service';
import { ReactionService } from './services/reaction.service';
import { Account } from './entities/account.entity';
import { Message } from './entities/message.entity';
import { Reaction } from './entities/reactions.entity';
import { UserMessagesReceived } from './entities/user_messages_recieved.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'chit-chat-db.cvw8iaemureu.us-east-2.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'M6Lu7tB$fdyNKDi!E0ftA<KvjY27',
      database: 'chit-chat',
      synchronize: false,
      ssl: { rejectUnauthorized: false },
      entities: [Account, Message, Reaction, UserMessagesReceived],
    }),
    TypeOrmModule.forFeature([
      Account,
      Message,
      Reaction,
      UserMessagesReceived,
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppSocketGateway,
    AccountService,
    MessageService,
    ReactionService,
    UserMessagesReceivedService,
  ],
  exports: [
    AccountService,
    MessageService,
    ReactionService,
    UserMessagesReceivedService,
  ],
})
export class AppModule { }
