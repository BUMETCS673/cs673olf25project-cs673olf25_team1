import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Account } from 'src/entities/account.entity';
import { AccountService } from 'src/services/account.service';
import { MessageService } from 'src/services/message.service';
import { ReactionService } from 'src/services/reaction.service';
import { UserMessagesReceivedService } from 'src/services/user_messages_recieved.service';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:8000',
    credentials: true,
  },
})
export class AppSocketGateway {
  @WebSocketServer() server: Server;
  onlineUsers: Account[] = [];
  constructor(
    private readonly accountService: AccountService,
    private readonly messageService: MessageService,
    private readonly reactionService: ReactionService,
    private readonly userMessagesReceivedService: UserMessagesReceivedService,
  ) {}

  handleConnection(socket: Socket) {
    console.log(`Client connected: ${socket.id}`);
  }

  handleDisconnect(socket: Socket) {
    console.log(`Client disconnected: ${socket.id}`);
  }
  
  @SubscribeMessage('chat-message')
  handleMessage(socket: Socket, payload: any) {
    console.log("message received", payload)
    this.server.emit('chat-message', { data: [socket.id, payload] });

    this.messageService.insertMessage("admin", payload).then((message) => {
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
}
