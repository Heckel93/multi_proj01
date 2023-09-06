const posts = [
  {
    title: 'React [input] 개발자 모집 중!',
    description: 'React.js + Typescript 가능하신 프런트 개발자 분 모집 중입니다! 매 주마다 정기회의 진행하며 코드 리뷰를 수행하고 있습니다.',
    url: '/frame_15.png',
  },
  {
    title: 'Node.js [input] 공부 스터디',
    description: 'Node.js 에 대해서 학습하며 어떻게 동작하는 지 오픈소스 리포지토리를 기준으로 각자 파트를 맡고 분석하며 매주 1회 비대면회의로 발표합니다.',
    url: '/nodejs_round.webp',
  },
  {
    title: '[input] 인생에 대한 회고 모임',
    description: '인생이란 무엇일까',
    url: '/usagi_01.webp',
  },
  {
    title: 'Nest.js 서버 [input] 프로그래밍 스터디',
    description: 'Nest.js 를 학습하며 최종적으로 MSA 프로젝트를 진행해 볼 스터디원 구하고 있습니다.',
    url: '/nestjs.jpeg',
  },
];

const postPanel = document.querySelector('.post-panel');

const createRandomNumber = (min = 5, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const createPost = ({ title, description, url }, input) => {
  const container = document.createElement('div');
  const online = createRandomNumber(5, 30);
  const members = createRandomNumber(online, 100);

  container.className = 'post';
  container.innerHTML = `
    <img src="${url}" alt="" class="">
    <div class="flex flex-col">
      <h4 class="font-bold text-xl pb-1.5">
        ${title.replace('[input]', input)}
      </h4>
      <span class="text-gray-500 font-light max-w-[370px] text-sm md:text-base pb-6">
        ${description}
      </span>
      <span class="self-end text-gray-700">${online} 온라인 ${members}멤버</span>
    </div>
  `;

  return container;
};

const randomCreatePost = (input = '') => {
  const count = createRandomNumber(5, 70);
  const randomPosts = [];
  for (let i = 0; i < count; i++) {
    const mockIndex = createRandomNumber(0, posts.length - 1);
    randomPosts.push(createPost(posts[mockIndex], input));
  }

  while (postPanel.firstChild) {
    postPanel.removeChild(postPanel.lastChild);
  }

  randomPosts.forEach(post => {
    postPanel.append(post);
  });

  return randomPosts;
};

window.addEventListener('load', () => {
  const result = randomCreatePost().length;
});
