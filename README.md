# 멀티코드(가칭) (멀티캠퍼스 1차 WEB 프로젝트)

브라우저로 제공하는 채팅 서비스

### 팀원 소개
| 이름   | 역할 |
|------|----|
| 최찬범  | -  |
| 김건우  | -  |
| 김서원 | -  |
| 최은기 | -  |


## 사용 기술
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## 개발 문서
#### [UI 시안(Figma)](https://www.figma.com/file/GDqd62B3vAlWVLCrv3Q3mT/Untitled?type=design&node-id=0%3A1&mode=design&t=bhvee9wxlE6fiLpa-1)

## 디렉터리 구조
```
.
├── README.md 
├── index.html <-- 웹 페이지 진입 시 불러올 루트 문서
├── package-lock.json <-- 의존성 관리 파일
├── package.json <-- node.js 프로젝트 정보 파일
├── public <-- 이미지, 폰트 등 정적 자원 디렉터리
│   └── touch
├── src <-- 개발 소스파일 디렉터리
│   ├── doc <-- html 문서 파일 디렉터리
│   │   └── touch
│   ├── js <-- js 파일 디렉터리
│   │   └── main.js <- js 루트 파일
│   └── style <-- css 파일 디렉터리
│       ├── reset.css
│       └── style.css <- 루트 스타일 파일
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

#### [부트스트랩 5.3 공식 문서](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
#### [TailwindCSS](https://tailwindcss.com/)
#### [Vite.js](https://vitejs.dev/)
#### [FontAwesome](https://fontawesome.com/icons)
