import {Link} from 'react-router-dom';
import styled, { css } from 'styled-components';
import UserProfile from '../components/Board/UserProfile';
import BoardInput from '../components/Board/BoardInput';
import logo from '../components/image/logo.jpg';

const Container = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const Header = styled.div`
  background-color: #fff;
  width: 100%;
  height: 56px;
  padding: 0px 12px;
  font-size: 15px;
  text-align: left;
  line-height: 56px;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  vertical-align: middle;
  cursor: pointer;
`

const HeaderTitle = styled.span`
  color: #454545;
  font-weight: bold;
`

const Profilebox = styled.div`
  width: 100%;
  height: 240px;
  text-align: center;
`

const Profilebtn = styled.button`
  display: inline-block;
  width: 64px;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 20px 3px;
  font-size: 14px;
  line-height: 28px;
  color: #505050;
  cursor: pointer;
`

function Board() {
    return (
      <Container>
        <Header>
          <Link to="/Board">
            <Logo src={logo} alt="logo" />
          </Link>
          <HeaderTitle>자유게시판</HeaderTitle>
        </Header>
        <Profilebox>
          <UserProfile />
          <Link to="/MyPage">
            <Profilebtn>내정보</Profilebtn>
          </Link>
          <Link to="/Login">
            <Profilebtn>로그아웃</Profilebtn>
          </Link>
        </Profilebox>
        <BoardInput />
      </Container>
    );
  }
  
  export default Board;
  