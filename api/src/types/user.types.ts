import { Socket } from "socket.io";

export type User = {
  socket: Socket;
  username: string;
};