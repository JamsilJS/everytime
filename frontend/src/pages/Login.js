import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../_actions/user_actions";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import LoginInput from "../components/Login/LoginInput";
import LoginButton from "../components/Login/LoginButton";
import StyledContainer from "../components/Style/styledContainer";

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px 12px 0px;
`
const Logo = styled.img`
    display: inline-block;
    width: 48px;
    height: 52px;
`;
const LogoTitle = styled.h2`
  color: #757575;
  font-size: 16px;
  font-weight: normal;
  padding: 28px 8px 0px 0px;
  letter-spacing: -0.045rem;
`;
const StyledDiv = styled.div`
  color: #c62917;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
  font-size: 16px;
`;
const StyledSpan = styled.span`
  color: #909090;
  font-weight: 300;
  margin-right: 10px;
  letter-spacing: -0.05rem;
`;

function Login({ history }) {
  const dispatch = useDispatch();
  const [inputs, setInput] = useState({
    userId: "",
    userPw: "",
  });

  const { userId, userPw } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      id: userId,
      password: userPw,
    };
    if (!userId || !userPw) {
      alert("필수 항목을 작성하세요!");
    } else {
      dispatch(loginUser(body))
        .then((response) => {
          if (response.payload.loginSuccess) {
            window.localStorage.setItem('userId', response.payload.userId);
            history.push("/board");
          } else {
            alert(response.payload.message);
          }
        })
    }
  };

  return (
    <StyledContainer>
      <div>
        <FlexBox>
          <Logo src={logo} alt="logo" />
          <LogoTitle>지금 
            <strong> 에브리타임</strong>
            을 시작하세요!
          </LogoTitle>
        </FlexBox>
        <form onSubmit={onSubmit}>
          <LoginInput
            type="text"
            name="userId"
            placeholder="아이디"
            onChange={onChange}
            value={userId}
          />
          <LoginInput
            type="password"
            name="userPw"
            placeholder="비밀번호"
            onChange={onChange}
            value={userPw}
          />
          <LoginButton type="submit">로그인</LoginButton>
        </form>
        <StyledDiv>
          <Link to="./register">
            <StyledSpan>에브리타임에 처음이신가요?</StyledSpan>회원가입
          </Link>
        </StyledDiv>
      </div>
    </StyledContainer>
  );
}

export default withRouter(Login);
