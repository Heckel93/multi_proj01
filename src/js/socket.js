import { io } from 'socket.io-client';
import { fakerKO } from '@faker-js/faker';

import { getUser } from './login.js';

const chatTest = document.querySelector('#chatTest');
chatTest.addEventListener('click', () => {
  const user = getUser();
  socket.emit('chat', {
    user: user?.name,
    message: fakerKO.lorem.lines(3),
  });
});

export let socket = null;

const initializeSocket = () => {
  const user = getUser();
  if (!user) throw Error('로그인이 필요합니다.');
  const instance = io('ws://localhost:8000', {
    auth: user,
  });
  socket = instance;
  return instance;
};

initializeSocket();

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

socketTest();