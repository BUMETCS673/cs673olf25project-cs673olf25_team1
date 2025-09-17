// socket.ts
import { io, Socket } from "socket.io-client";

const URL = "http://localhost:3000";

const socket: Socket = io(URL, {
  autoConnect: true, // ensures it connects immediately
});

export default socket;
