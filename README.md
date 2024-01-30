# OPENMIND

<br/>

![242](https://github.com/SiWooJinSeok/OpenMind6team/assets/59861974/43b81f9e-5308-48a7-9289-611a2a2379f4)

<br/>

## 프로젝트 정보

- ### 코드잇 스프린트 3기 6팀
- ### 목적 : 학습
- ### 2024.01.17(수) ~ 02.01(목)

<br/>

# 6 팀 소개

### 팀원 : 고기호, 노진석(팀장), 송상훈, 이시열

<br/>

![asdas](https://github.com/SiWooJinSeok/OpenMind6team/assets/59861974/c40d2391-72df-48be-85f8-5da8f6b2742e)

<br/>

# 배포 주소

<br/>

> <a href='https://tourmaline-lebkuchen-4fc027.netlify.app'><img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"></a>

<br/>

# 프로젝트 소개

- ### "질문과 답변을 통해 의미 있는 대화를 위해 설계된 독특한 커뮤니케이션 플랫폼 'Open Mind'를 소개합니다. 
- ### 다른 사람들과 연결하고, 마음을 열고, 매력적인 대화를 키워보세요. 
- ### 호기심이 연결을 불러일으키고 모든 질문이 연결되는 커뮤니티에 참여하세요.

<br/>

# 시작 가이드

## 1. 권장

- ### node: 20.0.0 이상
- ### npm: 9.6.4 이상

<br/>

## 2. 설치 및 실행과정

<br/>

### 1. 아래 처럼 실행한다.
``` 
git clone https://github.com/SiWooJinSeok/OpenMind6team
```
### 2. 폴더로 이동해서 VSCode를 실행

<br/>

### 3. 터미널 열고 아래처럼 설치
```
npm install
```
### 4. 설치가 끝나면 아래처럼 실행
```
npm run start
```

### 5. 환경 변수(.env파일) 생성 및 설정
``` .env
REACT_APP_API_KEY='본인 카카오톡 자바스크립트키값'
```

<br/>

# 기술 스택

## Skills & Tools

> <img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css3&logoColor=white"> ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 

<br/>
 
## Library

> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-000000?style=for-the-badge&logo=husky&logoColor=white"> <img src="https://img.shields.io/badge/gitmoji-ffdd67?style=for-the-badge&logo=gitmoji&logoColor=white">

<br/>

## Community

> <a href=https://deeply-tibia-5e9.notion.site/Codeit-FE-Sprint-6-8382f5e32f444c4288d134dbd1df64dd><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"></a> ![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

<br/>

# 주요 기능

- ##  메인 페이지
    - ### 아이디를 정해 피드 생성
    - ### 질문을 위한 질문 목록 페이지로 이동
- ## 질문 목록 페이지
    - ### 생성된 피드들을 카드 형태로 페이지별로 표시
    - ### 피드들을 ‘이름순’ , ’최신순’ 기준으로 원하는대로 정렬
    - ### 원하는 피드를 선택하여 질문 페이지로 이동
    - ### 질문할 피드를 랜덤으로 골라주는 랜덤선택
- ## 질문 페이지
    - ### 생성된 아이디들에 대한 개별 Feed
    - ### 질문 생성
    - ### 질문 표시
    - ### 질문에 대한 답변 여부, 답변 표시
    - ### 질문에 대한 좋아요, 싫어요 표시
    - ### 링크 복사, 카카오, 페이스북 공유
- ## 답변 페이지
    - ### 피드 삭제
    - ### 답변하기 및 수정하기
    - ### 질문 삭제하기
    - ### 답변 거절하기
    - ### 질문에 대한 좋아요, 싫어요 표시
    - ### 링크 복사, 카카오, 페이스북 공유

<br/>

# 아키텍쳐

- ## 유저 플로우
    
    ![ddsad](https://github.com/SiWooJinSeok/OpenMind6team/assets/59861974/dc454b3a-4f0a-4fb1-9602-dde2bf6e42a3)

    
- ## git 브랜치 전략
    
   ![dsasad](https://github.com/SiWooJinSeok/OpenMind6team/assets/59861974/9f4f5429-6f43-4e6a-82cd-c92dd65289a2)

    
- ## 폴더 구조
    
    ![sdfsdfdsf](https://github.com/SiWooJinSeok/OpenMind6team/assets/59861974/b9b21236-f349-48b6-a958-51f48231aeea)

    
<br/>

# 개발 과정 및 회고록

- ## 문제

### 1. 질문 목록 페이지 에서 8개씩 데이터를 불러 오는데 반응형으로 배치가 바뀌었을 때 마지막 칸이 비어 보이는 문제.
### 2. Eslint, netlify 빌드 오류 및 conflict
### 3. git hub 이용한 협업이 익숙하지 않아 브렌치를 헷갈리는 등의 문제
### 4. 기술적인 숙련도 부족과, 러닝커브 문제로 인한 스토리북 에러 문제.
### 5. 폴더 구조 및 컴포넌트의 단위 atom인지 organism인지의 기준이 애매했던 문제.

<br/>

- ## 해결 방법

### 1. 배치가 바뀌었을 때 마지막 칸에 다음 페이지로 넘어가는 로직이 담긴 버튼을 만들어 두고 사용.
    
### 2. Eslint, netlify 빌드 오류 및 conflict해결방법
    
  #### 1. .eslintrc 파일에 아래와 같이 설정 추가:
        
```json
"parser": "@babel/eslint-parser",
"parserOptions": {
"ecmaVersion": 2020,
"sourceType": "module",
"requireConfigFile": false}
```
        
#### 2. 필요한 패키지 설치:
        
```scss
npm install --save-dev @babel/eslint-parser @babel/core
```
        
#### 3. babelrc 파일 생성 및 설정 추가하여 옵셔널 체이닝 오류 해결.
        
#### 4. 나머지 문제들은 Prettier를 실행하여 해결.
        
### 3. 프로젝트를 진행하면서 git hub에 익숙해 지는 시간과 문제 해결 과정을 겪으면서 git hub 학습을 통해 해결. (ex. git revert )
    
### 4. 기본 적인 Story Book 에 대한 학습과, API 까지 관련해서 제대로 활용 하기 위한 학습의 필요성을 느끼고 학습 중에 있음.
    
### 5. 앞으로 프로젝트 규모가 커짐에 따라 Atomic 디자인을 사용할 때 초기에 보다 정확한 폴더 구조 결정이 필요하고, 그에 따른 코드 작성이 필요함을 느낌.

<br/>

- # 최종 KPT
    - ## K
        - ### 자신이 맡은 부분을 기한 내에 마무리하여 PR을 올리고, 코드 리뷰와 코드 수정을 꼼꼼히 했다.
        - ### 모두 최선을 다해 각자의 역할에 맡게 잘 해냈다.
        - ### 각자 알아서 일거리 찾아서 척척 다 해결해서 멋있다 !
    - ## P
        - ### 아쉬운 점은 로딩, 에러 처리를 못했다는 것. 로딩중 이거나 에러가 났을 때 임시로 보여줄 컴포넌트를 만들지 못해서 아쉽다.
        - ### 스토리 북이 익숙하지 않아 만드는 데 어려움이 있었다.
    - ## T
        - ### 발표가 끝이나면 모두에게 칭찬해주기
        - ### 팀 바껴도 잘 지내기
        - ### 프론트엔드 마스터가 되기.

<br/>

# QNA

## 즐거운 QNA 시간~

## 질문 해주세요!
