const doAnimationMainPage = () => {
  const articles = Array.from(document.getElementsByClassName('article'));
  if (articles.length === 0) return;

  const options = {
    rootMargin: '0px',
    threshold: 0.1,
  };
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const { className } = entry.target;
        entry.target.className += ' animate__animated animate__fadeInUp';
      })
    },
    options
  );

  articles.forEach(article => {
    observer.observe(article);
  });

  const startment = document.querySelector('.start');
  if (startment) {
    observer.observe(startment);
  }

};


(() => {
  doAnimationMainPage();
})();
