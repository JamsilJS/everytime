# Everytime board clone
<br/>
<p align="center">
  <img width="100" alt="7" src="https://user-images.githubusercontent.com/71836751/107924570-83bf1080-6fb6-11eb-927b-9b13b0c2423c.png">
</p>

## Description

학교 커뮤니티 서비스인 에브리타임 게시판 클론 프로젝트입니다. 3개월 간 스터디한 내용을 바탕으로 MongoDB, Express.js, React.js, Node.js 스택을 활용해 CRUD 기능을 구현하고 개발역량과 팀 협업 능력을 키우는 것을 목표로 했습니다.

## Contributors

- 박지연 [Github](https://github.com/gparkkii)
- 송보은 [Github](https://github.com/Boeun05)

## Features

#### 로그인
1. 처음 접속 시 메인화면을 로그인으로 설정
2. 토큰을 이용하여 유저가 비로그인 시 마이페이지, 게시판 페이지 안보이게 설정
3. 로그인 시 userId, userPw가 일치하는지 체크
4. input에 userId, userPw 정보가 다 들어왔는지 확인
#### 회원가입
1. 아이디 및 비밀번호 글자 수 제한
2. 아이디 중복 체크
3. 학교 검색 및 학번 추가 기능
4. input에 정보가 다 들어왔는지 확인하고 회원가입 승인
#### 게시판
1. user profile에 설정한 닉네임과 학교 표시
2. 게시판 글 작성 기능(300자 이내)
3. 게시판 글 작성 시 익명 기능 및 작성시간 추가
4. 등록된 게시글 좋아요 및 댓글 기능 추가
5. 게시판 페이지네이션 기능 추가
#### 마이페이지
1. 계정 정보 변경 기능 및 메뉴 추가(nickname, email, password)
2. 내가 쓴 게시글 및 좋아요 한 글, 작성한 댓글 모아보기 설정
3. 내가 쓴 게시글 및 댓글 삭제 기능 추가
4. 회원탈퇴 기능 추가

## Preview
#### 로그인 & 회원가입
<p align="center">
  <img width="280" alt="7" src="https://user-images.githubusercontent.com/71811780/108114998-e01c5000-70dc-11eb-97d2-de160f368d5a.gif">
  &nbsp;&nbsp;&nbsp;
  <img width="280" alt="7" src="https://user-images.githubusercontent.com/71811780/108112315-44d5ab80-70d9-11eb-8595-eda8af5d9d76.gif">
</p>

#### 게시판 & 마이페이지
<p align="center">
  <img width="280" alt="7" src="https://user-images.githubusercontent.com/71811780/108112312-43a47e80-70d9-11eb-8b93-b34216d96f22.gif">
  &nbsp;&nbsp;&nbsp;
  <img width="280" alt="7" src="https://user-images.githubusercontent.com/71811780/108112317-4606d880-70d9-11eb-939f-64ee09f484da.gif">
</p>


## Requirements

### Language
- Frontend
  - Javascript
  
- Backend
  - Node.js
  
### Framework
- Frontend
  - React
- Backend
  - Express.js
  
### Database
- Backend
  - MongoDB
  
### Library
- Frontend
  - Redux
  - Styled-components
  - Axios
  - @material-ui/lab

- Backend
  - Mongoose
  - Bcrypt
  - JWT

