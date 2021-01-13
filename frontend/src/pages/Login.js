import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginInput from "../components/Login/LoginInput";
import LoginButton from "../components/Login/LoginButton";

const StyledDiv = styled.div`
  color: #c62917;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
  font-size: 18px;
`;

const StyledSpan = styled.span`
  color: #a6a6a6;
  font-weight: 300;
  margin-right: 10px;
`;

function Login({ history }) {
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
    if (!userId || !userPw) {
      alert("필수 항목을 작성하세요!");
    }
    axios
      .post("/login", {
        id: { userId },
        password: { userPw },
      })
      .then((response) => {
        if (response === 200) {
          alert("로그인완료!");
          history.push("./board");
        } else if (response === 404) {
          alert("로그인실패!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <LoginInput
          name="userId"
          placeholder="아이디"
          onChange={onChange}
          value={userId}
        />
        <LoginInput
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
      <div>
        {userId}({userPw})
      </div>
    </div>
  );
}

export default Login;
