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
// import { AiService } from './services/ai.service';
import { AuthService } from './authentication/service';
import { AuthController } from './authentication/controller';
import { AuthModule } from './authentication/auth.module';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
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
  controllers: [AppController, AuthController, AccountController],
  providers: [
    AppService,
    AppSocketGateway,
    AccountService,
    MessageService,
    ReactionService,
    UserMessagesReceivedService,
    // AiService,
    AuthService
  ],
  exports: [
    AccountService,
    MessageService,
    ReactionService,
    UserMessagesReceivedService,
    // AiService,
    AuthService
  ],
})
export class AppModule { }
