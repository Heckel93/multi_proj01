import { Server } from 'socket.io';
import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';

import { Chat } from './types';

const chatDatabase: Map<string, string> = new Map();

const app = express();
const httpServer = http.createServer(app);

app.use(cors({
  origin: '*',
  methods: '*',
}));
app.use(express.urlencoded());
app.use(express.json());

const ioServer = new Server(httpServer);

ioServer.on('connection', socket => {
  socket.send('history', () => {
    const entries = Array.from(chatDatabase.entries());
    if (entries.length > 1000) {
      chatDatabase.clear();
    }
    return entries.map(([userName, message]) => ({
      userName, message
    }));
  });

  socket.emit('enter-new-member', () => {
    const headers = socket.request.headers;
    console.log({ headers });
    const { clientsCount } = ioServer.engine;
    return {
      clientsCount,
    };
  });

  socket.on('chat', (data: Chat) => {
    chatDatabase.set(data.user, data.message);
    socket.broadcast.emit('chat-broadcast', data);
  });

  socket.on('disconnect', socket => {
  });
});

httpServer.listen(8000);
