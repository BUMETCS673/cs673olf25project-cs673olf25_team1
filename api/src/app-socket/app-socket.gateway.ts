import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AccountService } from '../services/account.service';
import { MessageService } from '../services/message.service';
import { ReactionService } from '../services/reaction.service';
import { UserMessagesReceivedService } from '../services/user_messages_recieved.service';
import { UserMessagesReceived } from 'src/entities/user_messages_recieved.entity';
// import { AiService } from 'src/services/ai.service';
import { User } from 'src/types/user.types';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:8000',
    credentials: true,
  },
})
@Injectable()
export class AppSocketGateway {
  @WebSocketServer() server: Server;
  onlineUsers: User[] = [];
  constructor(
    private readonly accountService: AccountService,
    private readonly messageService: MessageService,
    private readonly reactionService: ReactionService,
    private readonly userMessagesReceivedService: UserMessagesReceivedService,
    // private readonly aiService: AiService,
  ) {}

  handleConnection(socket: Socket) {
    console.log(`Client connected: ${socket.id}`);
  }

  handleDisconnect(socket: Socket) {
    console.log(`Client disconnected: ${socket.id}`);

    if ((socket as any).username) {
      this.handleUserLoggedOut(socket);
    }
  }

  @SubscribeMessage('user-logged-in')
  handleUserLoggedIn(socket: Socket, payload: { username: string }) {
    (socket as any).username = payload.username;

    this.onlineUsers.push({ socket, username: payload.username });
  }

  handleUserLoggedOut(socket: Socket) {
    delete (socket as any).username;
    this.onlineUsers = this.onlineUsers.filter(
      (user) => user.socket.id !== socket.id,
    );
  }

  @SubscribeMessage('recieve-existing-messages')
  async handleGetExistingMessages(socket: Socket) {
    const receivedMessagesList =
      (await this.userMessagesReceivedService.findUserMessagesReceived(
        (socket as any).username,
      )) || [];
    const receivedMessagesIds = receivedMessagesList.map(
      (msg) => msg.message_id,
    );
    const usersMessages =
      (await this.messageService.findMessagesByOwner(
        (socket as any).username,
      )) || [];
    usersMessages.map((msg) => (msg.message_owner = 'You'));
    const recievedMessages =
      (await this.messageService.findMessagesByIds(receivedMessagesIds)) || [];
    const allMessages = [...usersMessages, ...recievedMessages]
      .filter(Boolean)
      .sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
      );
    const allMessagesIds = allMessages.map((msg) => msg.id);

    const allReactions =
      await this.reactionService.findReactionsByMessageIds(allMessagesIds);

    allMessages.forEach((message) => {
      message['reactions'] = allReactions
        .filter((reaction) => reaction.message_id === message.id)
        .map((reaction) => reaction.reaction_type);
    });

    socket.emit('recieve-existing-messages', { allMessages });
  }

  @SubscribeMessage('recieve-chat-message')
  handleMessage(socket: Socket, messageId: number) {
    this.userMessagesReceivedService
      .insertUserMessagesReceived((socket as any).username, messageId)
      .then((message) => {});
  }

  @SubscribeMessage('send-chat-message')
  handleSendMessage(socket: Socket, payload: any) {
    this.messageService
      .insertMessage((socket as any).username, payload)
      .then((message) => {
        socket.broadcast.emit('recieve-chat-message', {
          data: [(socket as any).username, payload, message.id],
        });

        socket.emit('recieve-chat-message', {
          data: ['You', payload, message.id],
        });

        for (const user of this.onlineUsers) {
          if (user.username !== (socket as any).username) {
            this.userMessagesReceivedService
              .insertUserMessagesReceived(user.username, message.id)
              .then((message) => {});
          }
        }
      });
  }

  @SubscribeMessage('user-typing')
  handleUserTyping(socket: Socket, payload: any) {
    this.server.emit('user-typing', { data: [socket.id, payload] });
  }

  // User Account Management
  @SubscribeMessage('create-account')
  async handleCreateAccount(
    socket: Socket,
    payload: { username: string; password: string; fullname: string },
  ) {
    const { username, password, fullname } = payload;

    this.accountService
      .insertAccount(username, password, fullname)
      .then((account) => {
        console.log('Account created for user:', username);
        this.server.emit('account-created', { data: [account] });
      })
      .catch((error) => {
        console.error('Error creating account for user:', username, error);
        socket.emit('account-creation-failed', {
          error: 'Account creation failed',
        });
      });
  }

  @SubscribeMessage('ask_ai')
  async handleAskAi(
    @ConnectedSocket() socket: Socket,
    @MessageBody() payload: { message: string },
  ) {
    console.log('AI question received:', payload.message);

    // const reply = await this.aiService.getLlmAnswer(payload.message);

    // socket.emit('ai_answer', { reply });
  }

  @SubscribeMessage('send-reaction')
  async handleSendReaction(
    @ConnectedSocket() socket: Socket,
    @MessageBody() payload: { messageId: number; reaction: string },
  ) {
    const { messageId, reaction } = payload;
    const username = (socket as any).username;

    const existingReaction =
      await this.reactionService.findReactionByUserAndMessage(
        username,
        messageId,
      );

    if (existingReaction) {
      if (existingReaction.reaction_type === reaction) {
        await this.reactionService.deleteReaction(existingReaction.id);
      } else {
        await this.reactionService.updateReaction(
          username,
          messageId,
          reaction,
        );
      }
    } else {
      await this.reactionService.insertReaction(username, messageId, reaction);
    }

    const allReactions =
      await this.reactionService.findReactionsByMessageId(messageId);
    const emojiReactions = allReactions.map(
      (reaction) => reaction.reaction_type,
    );

    this.server.emit('recieve-reaction', {
      messageId,
      reactions: emojiReactions,
    });
  }
}
