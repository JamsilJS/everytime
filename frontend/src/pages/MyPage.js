import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../components/image/logo.jpg";

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0px 10px;
`;

const Header = styled.div`
  width: 100%;
  height: 56px;
  padding: 0px 2px;
  font-size: 15px;
  text-align: left;
  line-height: 56px;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  vertical-align: middle;
  cursor: pointer;
`;

const HeaderTitle = styled.span`
  color: #454545;
  font-weight: bold;
`;

const MenuBox = styled.ul`
  color: #212121;
  width: 100%;
  margin: 8px 0px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #eee;
  box-sizing: border-box;
  line-height: 40px;
`;
const BoxTitle = styled.li`
  font-size: 16px;
  font-weight: bold;
`;

const BoxMenu = styled.li`
  font-size: 14px;
`;

function MyPage() {
  return (
    <Container>
      <Header>
        <Link to="/Board">
          <Logo src={logo} alt="logo" />
        </Link>
        <HeaderTitle>마이페이지</HeaderTitle>
      </Header>
      <MenuBox>
        <BoxTitle>계정</BoxTitle>
        <BoxMenu>
          <Link to="/MyPage">프로필 이미지 변경</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to="/MyPage">닉네임 변경</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to="/MyPage">이메일 변경</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to="/MyPage">비밀번호 변경</Link>
        </BoxMenu>
      </MenuBox>
      <MenuBox>
        <BoxTitle>커뮤니티</BoxTitle>
        <BoxMenu>
          <Link to="/MyPage">내가 쓴 글</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to="/MyPage">내가 댓글 단 글</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to="/MyPage">스크랩</Link>
        </BoxMenu>
      </MenuBox>
      <MenuBox>
        <BoxTitle>기타</BoxTitle>
        <BoxMenu>
          <Link to="/MyPage">회원탈퇴</Link>
        </BoxMenu>
      </MenuBox>
    </Container>
  );
}

export default MyPage;
