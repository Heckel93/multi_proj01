import { io } from 'socket.io-client';
import { getUser } from './login.js';


let socket = null;

export const initializeSocket = () => {
  const user = getUser();
  if (!user) throw Error('로그인이 필요합니다.');
  const instance = io('ws://localhost:8000', {
    auth: user,
  });
  socket = instance;
  return instance;
};

const socketTest = () => {
  if (!socket) return;

  console.log('test');

  socket.on('userList', data => {
    console.log({ userList: data });
  });

  socket.on('history', data => {
    console.log({ history: data });
  });

  socket.on('chat-broadcast', data => {
    console.log({ chat: data });
  });

  socket.on('disconnected', data => {
    console.log({ disconnect: data });
  });
};
