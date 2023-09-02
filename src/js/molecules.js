/**
 * @description 헤더 태그를 식별하여 헤더를 생성합니다.
 * @exception 헤더 태그가 없으면 에러 발생
 * @author galaxy4276
 */
export const createHeader = () => {
  const header = document.getElementsByTagName('header');
  if (!header) throw Error('헤더가 존재하지 않습니다.');

  const bootstrap = `
    <span class="text-[1.3rem]">
      Multicode
    </span>
    <nav class="font-medium flex gap-x-4">
      <a href="/src/doc/download.html" class="hover:underline underline-offset-4">다운로드</a>
      <a href="/src/doc/discovery.html" class="hover:underline underline-offset-4">디스커버리</a>
      <a href="/src/doc/chat.html" class="hover:underline underline-offset-4">채팅</a>
    </nav>
    <button type="button" class="button_white !py-1.5 !px-0 login">
      로그인
    </button>
  `;

  for (const head of header) {
    head.className = 'header common_layout z-20';
    head.innerHTML = bootstrap;
  }
};

/**
 * @description 푸터 태그를 식별하여 푸터를 생성합니다.
 * @exception 푸터 태그가 없으면 에러 발생
 * @author galaxy4276
 */
export const createFooter = () => {
  const footer = document.getElementsByTagName('footer');
  if (!footer) throw Error('푸터가 존재하지 않습니다.');

  const bootstrap = `
      <section class="flex flex-col md:flex-row gap-x-28 gap-y-10">
      <nav class="flex flex-col gap-y-3 text-white pb-0 md:pb-16">
        <span class="text-cyan-500 font-bold">네비게이션</span>
        <a href="/src/doc/download.html">다운로드</a>
        <a href="/src/doc/download.html">디스커버리</a>
        <a href="/src/doc/chat.html">채팅 서비스 가기</a>
      </nav>

      <nav class="flex flex-col gap-y-3 text-white pb-0 md:pb-16">
        <div class="flex items-center gap-x-2">
          <img src="/github.svg" alt="github icon">
          <span class="text-cyan-500 font-bold">Github</span>
        </div>
        <a href="/download">최은기 (galaxy4276)</a>
        <a href="/discover">최찬범 (bbomfomi)</a>
        <a href="/chat">김건우 (kkwkkw)</a>
        <a href="/chat">김서원 (sekim2)</a>
      </nav>
    </section>

    <div class="h-0 border border-solid border-cyan-500 w-full my-4"></div>

    <section class="w-full flex justify-between items-center text-white">
      <h1 class="font-bold">Multicode</h1>
      <div>
        <span class="hello text-white"></span>
        <button class="button_primary !py-2 !px-0 login">로그인</button>
      </div>
    </section>
  `;

  for (const foot of footer) {
    foot.className = 'common_layout min-h-[360px] bg-gray-900 py-[20px]';
    foot.innerHTML = bootstrap;
  }
};

/**
 * @description UI 구성에 필요한 모든 컴포넌트들을 반영합니다.
 * @author galaxy4276
 */
const bootstrap = () => {
  createHeader();
  createFooter();
};

bootstrap();
