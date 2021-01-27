import React from 'react';
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Common/Header";
import Footer from '../Common/Footer';

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

function PageList() {
    return (
        <>
            <Header title="마이페이지"/>
            <MenuBox>
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
            </MenuBox>
            <MenuBox>
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
            </MenuBox>
            <MenuBox>
                <BoxTitle>기타</BoxTitle>
                <BoxMenu>
                <Link to="/mypage/withdrawal">회원탈퇴</Link>
                </BoxMenu>
            </MenuBox>
        </>
    )
}

export default withRouter(PageList);
