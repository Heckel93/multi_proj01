window.addEventListener('load', () => {
  const loginButtons = document.querySelectorAll('.login');

  loginButtons.forEach(button => {
    button.addEventListener('click', () => {
      location.href = '/src/doc/login.html';
    });
  })
});
