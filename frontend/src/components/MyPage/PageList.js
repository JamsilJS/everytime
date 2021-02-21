import React from 'react';
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Common/Header";
import StyledBox from '../Style/styledBox';
import LogoutButton from '../Common/LogoutButton';

const BoxTitle = styled.li`
  font-size: 16px;
  font-weight: bold;
`;

const BoxMenu = styled.li`
  font-size: 14px;
`;

function PageList() {
  return (
    <>
      <Header title="마이페이지" link="/board"/>
      <StyledBox>
        <BoxTitle>계정</BoxTitle>
        <BoxMenu>
          <Link to="/mypage/nickname">닉네임 설정</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to="/mypage/email">이메일 변경</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to="/mypage/password">비밀번호 변경</Link>
        </BoxMenu>
      </StyledBox>
      <StyledBox>
        <BoxTitle>커뮤니티</BoxTitle>
        <BoxMenu>
          <Link to="/mypage/boardlist">내가 쓴 글</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to="/mypage/comment">내가 댓글 단 글</Link>
        </BoxMenu>
        <BoxMenu>
          <Link to="/mypage/favorite">내가 좋아한 글</Link>
        </BoxMenu>
      </StyledBox>
      <StyledBox>
        <BoxTitle>기타</BoxTitle>
        <BoxMenu>
          <LogoutButton/>
        </BoxMenu>
        <BoxMenu>
          <Link to="/mypage/withdrawal">회원탈퇴</Link>
        </BoxMenu>
      </StyledBox>
    </>
  )
}

export default withRouter(PageList);
