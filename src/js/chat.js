import { getUser } from './login';
import { initializeSocket } from './socket';

const liverPanel = document.getElementById('liver_panel');
const chatListPanel = document.getElementById('chat_list');
const chatInputbox = document.querySelector('.chat_box');

const socket = initializeSocket();

const createLiveUser = (user) => {
  const liver = document.createElement('div');
  liver.className = 'liver';
  const bootstrap = `
    <img src="${user.avatarUrl}" alt="${user.name}_avatar" class="w-[42px] h-[42px] rounded-3xl">
    <span>${user.name}</span>
  `;
  liver.innerHTML = bootstrap;
  return liver;
};

const createChat = ({ user, avatarUrl, message }) => {
  const chatBox = document.createElement('div');
  chatBox.className = 'chat text-gray-200 min-w-[120px] whitespace-nowrap';
  const bootstrap = `
    <img src="${avatarUrl}" alt="image" class="w-[42px] h-[42px] rounded-3xl">
    <div class="flex flex-col w-fit">
      <div class="flex items-center gap-x-1.5 w-2/4">
        <span class="text-lg h-[30px]">${user}</span>
        <span class="text-xs text-gray-500">오늘 오후 5:54</span>
      </div>
      <span class="w-3/4 text-gray-300 whitespace-pre-line">${message}</span>
    </div>
  `;
  chatBox.innerHTML = bootstrap;
  return chatBox;
};

const reDrawLivePanel = (users) => {
  while (liverPanel.firstChild) {
    liverPanel.removeChild(liverPanel.lastChild);
  }
  users.forEach(user => {
    liverPanel.append(createLiveUser(user));
  });
};

/**
 * @description 필수 요소에 대해 초기화 로직을 수행합니다.
 */
(() => {
  const user = getUser();
  if (!user) {
    window.alert('로그인이 필요합니다.');
    location.href = '/';
  }

  chatInputbox.addEventListener('keyup', e => {
    const message = chatInputbox.value;
    if (message.trim() === '') return;

    if (e.key === 'Enter') {
      socket.emit('chat', {
        user: user.name,
        avatarUrl: user.avatarUrl,
        message: chatInputbox.value,
        time: new Date(),
      });

      chatInputbox.value = '';
    }
  });
})();

socket.on('userList', ({ userList: list }) => {
  list.forEach(user => {
    liverPanel.append(createLiveUser(user));
  });
});

socket.on('enter-new-member', ({ clientsCount, userName, userList }) => {
  reDrawLivePanel(userList);
});

socket.on('disconnected', ({ target, userList }) => {
  reDrawLivePanel(userList);
});

socket.on('chat-broadcast', (chat) => {
  chatListPanel.append(createChat(chat));
});
