import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppSocketGateway } from './app-socket/app-socket.gateway';
import { TypeOrmModule } from '@nestjs/typeorm/';
import { AccountService } from './services/account.service';
import { UserMessagesReceivedService } from './services/user_messages_recieved.service';
import { MessageService } from './services/message.service';
import { ReactionService } from './services/reaction.service';
import { Account } from './entities/account.entity';
import { Message } from './entities/message.entity';
import { Reaction } from './entities/reactions.entity';
import { UserMessagesReceived } from './entities/user_messages_recieved.entity';
import { AuthService } from './authentication/service';
import { AuthController } from './authentication/controller';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'chit-chat-db.cvw8iaemureu.us-east-2.rds.amazonaws.com',
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'M6Lu7tB$fdyNKDi!E0ftA<KvjY27',
      database: process.env.POSTGRES_DB || 'chit-chat',
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
    AuthModule
  ],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    AppSocketGateway,
    AccountService,
    MessageService,
    ReactionService,
    UserMessagesReceivedService,
    AuthService
  ],
  exports: [
    AccountService,
    MessageService,
    ReactionService,
    UserMessagesReceivedService,
    AuthService
  ],
})
export class AppModule { }
