import { Server } from 'socket.io';
import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';

import { Chat, UserAuth } from './types';

let chatDatabase: Chat[] = [];
let userDatabase: UserAuth[] = [];

const app = express();
const httpServer = http.createServer(app);

app.use(cors({
  origin: '*',
  methods: '*',
  credentials: true,
}));
app.use(express.urlencoded());
app.use(express.json());

const ioServer = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: '*',
  },
});

ioServer.on('connection', socket => {
  const newUser = socket.handshake.auth as UserAuth;
  userDatabase.push(newUser);
  console.log({ userDatabase });

  socket.emit('userList', { userList: userDatabase });
  socket.emit('history', (() => {
    if (chatDatabase.length > 1000) {
      chatDatabase = [];
    }
    return chatDatabase;
  })());

  socket.broadcast.emit('enter-new-member', (() => {
    const auth = socket.handshake.auth as UserAuth;

    const { clientsCount } = ioServer.engine;
    return {
      clientsCount,
      userName: auth.name,
      userList: userDatabase,
    };
  })());

  socket.on('chat', (data: Chat) => {
    chatDatabase.push({ user: data.user, message: data.message, avatarUrl: data.avatarUrl });
    console.log({ chatDatabase });
    socket.emit('chat-broadcast', data);
    socket.broadcast.emit('chat-broadcast', data);
  });

  socket.on('disconnect', reason => {
    const auth = socket.handshake.auth as UserAuth;
    console.log(`disconnected username: ${auth.name}`);
    userDatabase = userDatabase.filter(u => u.id !== auth.id);

    socket.broadcast.emit('disconnected', {
      target: auth,
      userList: userDatabase,
    });
  });

});

httpServer.listen(8000, '0.0.0.0');
