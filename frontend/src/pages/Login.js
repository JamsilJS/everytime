import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import LoginInput from "../components/Login/LoginInput";
import LoginButton from "../components/Login/LoginButton";
import { useDispatch } from "react-redux";
import { loginUser } from "../_actions/user_actions";

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
          console.log(response);
          if (response.payload.loginSuccess) {
            history.push("/board");
          } else {
            alert(response.payload.message);
          }
        })
        .catch((err) => console.log(err));
    }
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
    </div>
  );
}

export default withRouter(Login);
