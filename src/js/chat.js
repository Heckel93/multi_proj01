import dayjs from 'dayjs';
import { getUser } from './login';
import { initializeSocket } from './socket';

const liverPanel = document.getElementById('liver_panel');
const chatListPanel = document.getElementById('chat_list');
const chatInputbox = document.querySelector('.chat_box');
const profileCard = document.querySelector('.profile_card');

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

const createChat = ({ user, avatarUrl, message, time }) => {
  const chatBox = document.createElement('div');
  chatBox.className = 'chat text-gray-200 min-w-[300px] whitespace-nowrap';
  const bootstrap = `
    <img src="${avatarUrl}" alt="image" class="w-[42px] h-[42px] rounded-3xl">
    <div class="flex flex-col w-full">
      <div class="flex items-center gap-x-1.5 w-2/4">
        <span class="text-lg h-[30px]">${user}</span>
        <span class="text-xs text-gray-500">${time}</span>
      </div>
      <span class="w-3/4 text-gray-300 whitespace-pre-line">${message}</span>
    </div>
  `;
  chatBox.innerHTML = bootstrap;
  return chatBox;
};

const createEnterMessage = (userName) => {
  const div = document.createElement('div');
  div.className = 'flex items-center w-full';
  div.innerHTML = `
    <span class="text-gray-600">${userName} 님이 입장하셨습니다.</span>
  `;

  return div;
};

const createLeaveMessage = (userName) => {
  const div = document.createElement('div');
  div.className = 'flex items-center w-full';
  div.innerHTML = `
    <span class="text-gray-600">${userName} 님이 퇴장하셨습니다.</span>
  `;

  return div;
};

const reDrawLivePanel = (users) => {
  while (liverPanel.firstChild) {
    liverPanel.removeChild(liverPanel.lastChild);
  }
  users.forEach(user => {
    liverPanel.append(createLiveUser(user));
  });
};

const scrollToLastChatNode = () => chatListPanel.scrollTop = chatListPanel.scrollHeight;

const showConnectionErrorModal = () => {
  const modal = document.createElement('div');
  modal.onclick = window.connectionErrorModal.showModal();
  modal.innerHTML = `
          <dialog id="connectionErrorModal" class="modal">
            <form method="dialog" class="modal-box">
              <h3 class="font-bold text-lg">채팅 서버와 연결이 끊겼습니다.</h3>
              <p class="py-4">관리자에게 문의해주세요. 불편을 드려 죄송합니다.</p>
              <div class="modal-action">
                <button class="btn" onclick="location.href='/'">Close</button>
              </div>
            </form>
          </dialog>
        `;
  document.querySelector('main').append(modal);
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

  profileCard.append(createLiveUser(user));

  chatInputbox.addEventListener('keyup', e => {
    const message = chatInputbox.value;
    if (message.trim() === '') return;

    if (e.key === 'Enter') {
      socket.emit('chat', {
        user: user.name,
        avatarUrl: user.avatarUrl,
        message: chatInputbox.value,
        time: dayjs().format('MM월 DD일 HH:MM:ss'),
      });

      chatInputbox.value = '';

      setTimeout(() => {
        if (socket.connected) return;
        showConnectionErrorModal();
      }, 5000);
    }
  });
})();

window.addEventListener('load', () => {
  socket.on('userList', ({ userList: list }) => {
    list.forEach(user => {
      liverPanel.append(createLiveUser(user));
    });
  });

  socket.on('enter-new-member', ({ clientsCount, userName, userList }) => {
    reDrawLivePanel(userList);
    chatListPanel.append(createEnterMessage(userName));
  });

  socket.on('disconnected', ({ target, userList }) => {
    reDrawLivePanel(userList);
    chatListPanel.append(createLeaveMessage(target.name));
  });

  socket.on('history', (chatList) => {
    console.log({ chatList });
    chatList.forEach(chat => {
      chatListPanel.append(createChat(chat));
    });
    scrollToLastChatNode();
  });

  socket.on('chat-broadcast', (chat) => {
    chatListPanel.append(createChat(chat));
    scrollToLastChatNode();
  });

  socket.on('connect_error', showConnectionErrorModal);

});
