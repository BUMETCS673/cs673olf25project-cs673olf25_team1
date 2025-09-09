import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { log } from 'console';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:8000',
    credentials: true,
  },
})
export class AppSocketGateway {
  @WebSocketServer() server: Server;

  handleConnection(socket: Socket, ...args: any[]) {
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
  
}
