import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Account } from '../entities/account.entity';
import { Message } from '../entities/message.entity';
import { AccountService } from '../services/account.service';
import { MessageService } from '../services/message.service';
import { ReactionService } from '../services/reaction.service';
import { UserMessagesReceivedService } from '../services/user_messages_recieved.service';
import { UserMessagesReceived } from 'src/entities/user_messages_recieved.entity';
import { AiService } from 'src/services/ai.service';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:8000',
    credentials: true,
  },
})
export class AppSocketGateway {
  @WebSocketServer() server: Server;
  onlineUsers: Account[] = [];
  tempLoggedInUser: string = "admin"; // Temporary hardcoded user
  constructor(
    private readonly accountService: AccountService,
    private readonly messageService: MessageService,
    private readonly reactionService: ReactionService,
    private readonly userMessagesReceivedService: UserMessagesReceivedService,
    private readonly aiService: AiService,
  ) { }

  handleConnection(socket: Socket) {
    console.log(`Client connected: ${socket.id}`);

    this.handleGetExistingMessages(socket);
  }

  handleDisconnect(socket: Socket) {
    console.log(`Client disconnected: ${socket.id}`);
  }

  @SubscribeMessage('recieve-existing-messages')
  async handleGetExistingMessages(socket: Socket) {
    const receivedMessagesList = await this.userMessagesReceivedService.findUserMessagesReceived(this.tempLoggedInUser) || [];
    const receivedMessagesIds = receivedMessagesList.map(msg => msg.id);
    const usersMessages = await this.messageService.findMessagesByOwner(this.tempLoggedInUser) || [];
    const recievedMessages = await this.messageService.findMessagesByIds(receivedMessagesIds) || [];
    const allMessages = [...usersMessages, ...recievedMessages]
      .filter(Boolean)
      .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    socket.emit('recieve-existing-messages', { allMessages });
  }

  @SubscribeMessage('recieve-chat-message')
  handleMessage(socket: Socket, messageId: number) {
    console.log("Message received")
    this.userMessagesReceivedService.insertUserMessagesReceived(this.tempLoggedInUser, messageId).then((message) => {
      console.log("Message inserted with ID:", message.id);
    });
  }

  @SubscribeMessage('send-chat-message')
  handleSendMessage(socket: Socket, payload: any) {
    console.log("message received", payload)
    this.messageService.insertMessage("admin", payload).then((message) => {
      this.server.emit('recieve-chat-message', { data: [socket.id, payload, message.id] });
      console.log("Message inserted with ID:", message.id);
    });
  }

  @SubscribeMessage('user-typing')
  handleUserTyping(socket: Socket, payload: any) {
    //console.log("user-typing received", payload)
    this.server.emit('user-typing', { data: [socket.id, payload] });
  }

  // User Account Management
  @SubscribeMessage('create-account')
  async handleCreateAccount(socket: Socket, payload: { username: string; password: string; fullname: string }) {
    const { username, password, fullname } = payload;

    this.accountService.insertAccount(username, password, fullname).then((account) => {
      this.onlineUsers.push(account);
      console.log("Account created for user:", username);
      this.server.emit('account-created', { data: [account] });
    }).catch((error) => {
      console.error("Error creating account for user:", username, error);
      socket.emit('account-creation-failed', { error: 'Account creation failed' });
    });
  }

  @SubscribeMessage('ask_ai')
  async handleAskAi(
    @ConnectedSocket() socket: Socket,
    @MessageBody() payload: { message: string },
  ) {
    console.log("AI question received:", payload.message);

    const reply = await this.aiService.getLlmAnswer(payload.message);

    socket.emit('ai_answer', { reply });
  }
}
