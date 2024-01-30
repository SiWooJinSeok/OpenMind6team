![Cover](https://github.com/SiWooJinSeok/OpenMind6team/assets/59861974/43b81f9e-5308-48a7-9289-611a2a2379f4)

# ✨프로젝트 소개

## 👨‍💻 Members

**Codeit FE Sprint 3기 - 6팀**

|  Name  |                      Github                      |
| :----: | :----------------------------------------------: |
| 노진석 | [@SiWooJinSeok](https://github.com/SiWooJinSeok) |
| 고기호 |       [@GihoKo](https://github.com/GihoKo)       |
| 송상훈 |    [@Song-Sang](https://github.com/Song-Sang)    |
| 이시열 |     [@siyeol97](https://github.com/siyeol97)     |

## 🎞 Duration

2024.01.17(수) ~ 02.01(목)

## ☀️ Project Topic

질문과 답변을 통해 의미 있는 대화를 할 수 있는 독특한 커뮤니케이션 플랫폼

## 🛠️ Skills & Tools

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) <img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css3&logoColor=white"> ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## 📚 Library

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-000000?style=for-the-badge&logo=husky&logoColor=white"> <img src="https://img.shields.io/badge/gitmoji-ffdd67?style=for-the-badge&logo=gitmoji&logoColor=white">

## 💬 Community

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) <a href=https://deeply-tibia-5e9.notion.site/Codeit-FE-Sprint-6-8382f5e32f444c4288d134dbd1df64dd><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"></a> ![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)

## 🚢 Deploy

<a href='https://tourmaline-lebkuchen-4fc027.netlify.app'><img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"></a>

<br/>

---

# ✨로컬 환경 - 설치 및 실행 가이드

## 1. Getting the sources

```bash
git clone https://github.com/SiWooJinSeok/OpenMind6team
cd OpenMind6team
```

## 2. Install packages

```bash
npm install
```

## 3. Create `.env` file

```
REACT_APP_API_KEY = 'YOUR_SECRET_KAKAO_API_KEY'
```

## 4. Run development server

```bash
npm run start
```

<br>

---

# ✨ Feature

## 1. 메인 페이지

- 이름을 입력해서 질문을 받을 수 있는 피드 생성
- 질문을 위한 질문 목록 페이지로 이동

## 2. 질문 목록 페이지

- 생성된 피드들을 카드 형태로 페이지별로 표시
- 피드들을 ‘이름순’ , ’최신순’ 기준으로 선택해서 정렬
- 원하는 피드를 선택하여 질문 피드 페이지로 이동
- 질문할 피드를 랜덤으로 골라주는 랜덤선택 기능

## 3. 질문 피드 페이지

- 질문 생성
- 질문에 대한 답변 여부, 답변 표시
- 질문에 대한 좋아요, 싫어요 버튼, 수치 표시
- 링크 복사, 카카오, 페이스북 공유
- 무한 스크롤 방식

## 4. 답변 페이지

- 피드 삭제
- 답변하기 및 수정하기
- 개별 질문 삭제하기
- 답변 거절하기
- 질문에 대한 좋아요, 싫어요 버튼, 수치 표시
- 링크 복사, 카카오, 페이스북 공유
- 무한 스크롤 방식

<br/>

---

# ✨ Project Architecture

## 🔁 User Flow

![UserFlow](https://github.com/SiWooJinSeok/OpenMind6team/assets/59861974/dc454b3a-4f0a-4fb1-9602-dde2bf6e42a3)

## 💡 Git branch strategy : Github flow

![GithubFlow](https://github.com/SiWooJinSeok/OpenMind6team/assets/59861974/9f4f5429-6f43-4e6a-82cd-c92dd65289a2)

## 📁 Folder structure : Atomic Design

![Folders](https://github.com/SiWooJinSeok/OpenMind6team/assets/59861974/b9b21236-f349-48b6-a958-51f48231aeea)

<br/>

---

# ✨ Problem & Solution

### ⚠️ 질문 목록 페이지 에서 8개씩 데이터를 불러 오는데 반응형으로 배치가 바뀌었을 때 마지막 칸이 비어 보이는 문제

✅ 배치가 바뀌었을 때 마지막 칸에 다음 페이지로 넘어갈 수 있는 버튼을 만듦.

<br>

### ⚠️ Eslint, netlify 빌드 오류 및 conflict

✅ 1. .eslintrc 파일에 설정 추가

```json
"parser": "@babel/eslint-parser",
"parserOptions": {
"ecmaVersion": 2020,
"sourceType": "module",
"requireConfigFile": false
},
```

2. 필요한 패키지 설치

```bash
npm install --save-dev @babel/eslint-parser @babel/core
```

3. .babelrc 파일 생성 및 설정 추가하여 ES2020 문법을 쓸 수 있게 됨.

<br>

### ⚠️ github 이용한 협업이 익숙하지 않아 브렌치를 헷갈리는 등의 문제

✅ 프로젝트를 진행하면서 github에 익숙해지는 시간과 문제 해결 과정을 겪으면서 github 학습을 통해 해결. (ex. git revert)

<br>

### ⚠️ 기술적인 숙련도 부족과, 러닝커브 문제로 인한 스토리북 에러 문제

✅ 기본적인 StoryBook 에 대한 학습과, API 까지 관련해서 팀원과의 협업에 제대로 활용 하기 위해 공부하고 있음.

<br>

### ⚠️ 폴더 구조 및 컴포넌트의 단위 atom인지 organism인지의 기준이 애매했던 문제

✅ 프로젝트 규모가 커짐에 따라 Atomic 디자인을 사용할 때 초기에 정확한 폴더 구조 결정이 필요하고, 파일이 어디에 속하는지 판단을 하는 연습이 필요함.

---

# ✨ KPT 회고

## 👍🏻 Keep

- 자신이 맡은 부분을 기한 내에 마무리하여 PR을 올리고, 코드 리뷰와 코드 수정을 꼼꼼히 했다.

- 모두 최선을 다해 각자의 역할에 맡게 잘 해냈다.

- 팀원이 능동적으로 일거리를 찾아서 척척 다 해결해서 멋있다 !

- 새로운 기술에 대한 두려움이 없다.

## 🤔 Problem

- 로딩, 에러 처리를 못했다는 것. 로딩중 이거나 에러가 났을 때 임시로 보여줄 컴포넌트를 만들지 못해서 아쉽다.

- 스토리북이 익숙하지 않아 만드는 데 어려움이 있었다.

- 추가 기능을 더 넣었으면 좋았을 것 같다.

## 🔥 Try

- 발표가 끝이나면 모두에게 칭찬해주기!

- 프론트엔드 마스터가 되자!!

<br/>
