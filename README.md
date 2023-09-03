# MULTICODE

브라우저로 제공하는 간단한 채팅 서비스

### 팀원 소개
| 이름   | 역할                                                   |
|------|------------------------------------------------------|
| 최찬범  | -                                                    |
| 김건우  | -                                                    |
| 김서원 | -                                                    |
| 최은기 | 전체 디자인 시안 작성, PM, 소켓 API 서버 작성, 메인, 로그인, 채팅, UI 컴포넌트 |


## 관련 기술 태그

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## 개발 문서
#### [UI 시안(Figma)](https://www.figma.com/file/GDqd62B3vAlWVLCrv3Q3mT/Untitled?type=design&node-id=0%3A1&mode=design&t=bhvee9wxlE6fiLpa-1)

## 디렉터리 구조
```
.
├── README.md 
├── index.html <-- 웹 페이지 진입 시 불러올 루트 문서
├── package-lock.json <-- 의존성 관리 파일
├── package.json <-- node.js 프로젝트 정보 파일
├── api <-- 웹 소켓 API 서버 디렉터리
├── public <-- 이미지, 폰트 등 정적 자원 디렉터리
├── src <-- 개발 소스파일 디렉터리
│   ├── doc <-- html 문서 파일 디렉터리
│   ├── js <-- js 파일 디렉터리
│   └── style <-- css 파일 디렉터리
├── tailwind.config.js <-- tailwind 환경설정 파일
└── vite.config.js <- 서버 환경설정 파일

```

## How to run
```bash
 npm install
 npm run dev
```

## 참고
* 깃 커밋 규칙입니다.

| 이름 | 의미 | 예시 |
|----|-----|---|
|feat|새로운 기능|feat: 헤더 레이아웃 추가|
|fix|UI 오류나 로직 버그 수정|fix: 로그인 오류 수정|

#### [TailwindCSS 공식 문서](https://tailwindcss.com/)
#### [Vite.js 공식 문서](https://vitejs.dev/)
#### [Socket.io 공식 문서](https://socket.io/docs/v4/)
