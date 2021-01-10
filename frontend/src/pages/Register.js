import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CheckIdButton from '../components/ChcekIdButton'
import RegisterInput from '../components/RegisterInput'
import RegisterButton from '../components/RegisterButton'

const StyledSelect = styled.select`
  /* 공통 스타일 */
  width: 100%;
  outline: none;
  border: 1px solid #ededed;
  border-radius: 12px;
  box-sizing: border-box;
  color: #333;
  padding-left: 0.5rem;
  padding-right: 0.5rem;


  /* 색상 */
  background: #f9f9f9;
  &:focus{
    background: #fff;
  }
  

  /* 크기 */
  height: 40px;
  margin-top: 5px;
`;

function Register({history}) {
  const [inputs, setInput] = useState({
    userId: "",
    userPw: "",
    userEmail: "",
    userNickname: "",
    usableId: false,
  });

  const { userId, userPw, userEmail, userNickname, usableId } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const checkId = (e) => {
    e.preventDefault();
    axios
      .post("/register/checkId", {
        id: { userId },
      })
      .then((response) => {
        if (response === 200) {
          alert("사용가능한 아이디입니다.");
          setInput({
            ...inputs,
            usableId: true
          })
        } else if(response === 404){
          alert("다른 아이디를 입력해주세요");
        }
      })
      .catch((error) => console.log(error));
  };
  const SignUp = (e) => {
    // alert({userId}, {userPw}, {userEmail}, {userNickname})
    if(usableId === false){
      alert('아이디 중복확인을 해주세요')
      return
    }
    if(!userId || !userPw || !userEmail || !userNickname){
      alert('필수 항목을 작성해주세요')
      return
    }
    axios
      .post("/register", {
        id: { userId },
        password: { userPw },
        email: { userEmail },
        nickname: { userNickname }
      })
      .then((response) => {
        if (response === 200) {
          alert("회원가입완료!");
          history.push('./board')
        } else if(response === 404){
          alert("회원가입실패!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={SignUp}>
        <RegisterInput
          name="userId"
          placeholder="아이디"
          onChange={onChange}
          value={userId}
        />
        <CheckIdButton onClick={checkId}>중복체크</CheckIdButton>
        <RegisterInput
          name="userPw"
          placeholder="비밀번호"
          onChange={onChange}
          value={userPw}
        />
        <RegisterInput
          name="userEmail"
          placeholder="이메일"
          onChange={onChange}
          value={userEmail}
        />
        <RegisterInput
          name="userNickname"
          placeholder="닉네임"
          onChange={onChange}
          value={userNickname}
        />
        <StyledSelect
          name="userEnteranceYear"
          placeholder="입학년도"
          onChange={onChange}
          value={userNickname}
        />
        <RegisterButton type="submit">회원가입</RegisterButton>
        {userId}{userPw}{userEmail}{userNickname}
      </form>
    </div>
  );
}

export default Register;
