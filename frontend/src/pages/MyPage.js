import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Common/Header";

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0px 10px;
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
      <Header title="마이페이지"/>
      <MenuBox>
        <BoxTitle>계정</BoxTitle>
        <BoxMenu>
          <Link to="/MyPage">닉네임 변경</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to="/MyPage">이메일 변경</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to={`/password`}>비밀번호 변경</Link>
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
