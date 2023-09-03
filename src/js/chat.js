import { getUser } from './login';


(() => {
  const user = getUser();
  if (!user) {
    window.alert('로그인이 필요합니다.');
    location.href = '/';
  }
})();
