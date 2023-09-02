import { fakerKO } from '@faker-js/faker';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/**
 * @description 로그인을 수행합니다.
 * @exception 유효성 검사에 실패하면 로그인 실패 UI를 작성합니다.
 * @author galaxy4276
 */
export const login = () => {
  const idElm = document.getElementById('login_id');
  const passwordElm = document.getElementById('login_pw');
  const idError = document.getElementById('id_error_tooltip');
  const pwError = document.getElementById('pw_error_tooltip');

  const correctEmail = emailRegex.test(idElm.value);
  const correctPassword = passwordElm.value.length >= 8;

  let errorSign = false;

  if (!correctEmail) {
    idError.textContent = '올바른 이메일 형식이 아닙니다.';
    errorSign = true;
  }

  if (correctEmail) {
    idError.textContent = '';
  }

  if (!correctPassword) {
    pwError.textContent = '패스워드가 올바르지 않습니다.';
    errorSign = true;
  }

  if (correctPassword) {
    pwError.textContent = '';
  }

  if (errorSign) return;

  const user = {
    id: fakerKO.datatype.uuid(),
    name: fakerKO.person.fullName(),
  };

  localStorage.setItem('user', JSON.stringify(user));

  location.href = '/';
};

const loginCallback = () => {
  location.href = '/src/doc/login.html';
};

window.addEventListener('load', () => {
  const isLogin = localStorage.getItem('user') !== null;

  const loginButtons = document.querySelectorAll('.login');

  if (isLogin) {
    loginButtons.forEach(button => {
      button.textContent = '로그아웃';
      button.addEventListener('click', () => {
        loginButtons.forEach(button => {
          localStorage.removeItem('user');
          button.textContent = '로그인';
          button.onclick = loginCallback;
        });
      });
    });
  }

  if (!isLogin) {
    loginButtons.forEach(button => {
      button.addEventListener('click', loginCallback);
    });
  }


  document.querySelector('.login_submit')?.addEventListener('click', () => {
    login();
  });
});
