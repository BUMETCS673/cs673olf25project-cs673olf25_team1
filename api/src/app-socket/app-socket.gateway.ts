import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:5173',
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
  
  @SubscribeMessage('request_event_test')
  handleMessage(socket: Socket, payload: any) {
  this.server.emit('request_event_test', { data: `${socket.id}: broadcasted an event!` });
  }
}
