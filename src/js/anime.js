import anime from 'animejs';

const doAnimationMainPage = () => {
  const articles = Array.from(document.getElementsByClassName('article'));
  if (articles.length === 0) return;

  const options = {
    root: document.querySelector('main'),
    rootMargin: '0px',
    threshold: 0,
  };
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        console.log({ intersecting: entry.isIntersecting, target: entry.target });
        if (!entry.isIntersecting) return;
        anime({
          targets: entry,
          translateX: 270,
        });
      })
    },
    options
  );

  articles.forEach(article => {
    observer.observe(article);
  });
};

(() => {
  doAnimationMainPage();
})();
