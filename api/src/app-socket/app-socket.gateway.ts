import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AppService } from '../app.service';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:8000',
    credentials: true,
  },
})
export class AppSocketGateway {
  @WebSocketServer() server: Server;

  constructor(private readonly appService: AppService) {}

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
  }

  @SubscribeMessage('user-typing')
  handleUserTyping(socket: Socket, payload: any) {
    //console.log("user-typing received", payload)
    this.server.emit('user-typing', { data: [socket.id, payload] });
  }

  // Listen for 'ask_ai' events from the client
  @SubscribeMessage('ask_ai')
  async handleAskAi(
    @MessageBody() data: { message: string },
    @ConnectedSocket() client: Socket,
  ) {
    const answer = await this.appService.getLlmAnswer(data.message);
    // Emit the answer back to the same client
    client.emit('ai_answer', { reply: answer });
  }

}
