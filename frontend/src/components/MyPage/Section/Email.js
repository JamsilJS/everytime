import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import StyledBox from '../../Style/styledBox';
import MyPageTitle from '../../Style/MyPageTitle';
import MyPageInput from '../../Style/MyPageInput';
import MyPageButton from '../../Style/MyPageButton';

const Textbox = styled.div`
  margin-top: 12px;
`;
const Warning = styled.p`
  color: #c62917;
  font-size: 12px;
  line-height: 18px;
  margin-top: 8px;
`;
const Alert = styled.p`
  color: #999;
  font-size: 12px;
  line-height: 18px;
  margin-top: 8px;
`;

function Email({history}) {
  const [inputs, setInput] = useState({
    currentEmail: "",
    currentPassword: "",
  });
  const { currentEmail, currentPassword } = inputs;
  const userFrom = localStorage.getItem('userId');
  
  useEffect(() => {
  axios.get('/user', {_id: userFrom})
    .then((response) => {
      setInput({
        currentEmail: response.data.email,
        currentPassword: "",
      });
    })
  },[userFrom])

  const onChangeHandler = (e) => {
    const { value, name } = e.currentTarget;
    setInput({
      ...inputs,
      [name]: value,
    });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      _id: userFrom,
      password: currentPassword,
      email: currentEmail
    }
    axios.post('/user/update/email', body)
      .then((response) => {
        if(!response.data.changeSuccess) {
          alert(response.data.message);
        } else {
          if(response.data.changeSuccess) {
            history.push("/mypage");
            alert("이메일이 변경되었습니다.");
          } else {
            alert("이메일 변경에 실패했습니다.");
          }
        }
      })
  }

  return (
    <>
      <Header title="이메일 변경" link="/board" backbutton={true}/>
      <form onSubmit={onSubmitHandler}>
        <StyledBox>
          <MyPageTitle>이메일</MyPageTitle>
          <MyPageInput 
            name="currentEmail"
            placeholder="이메일" 
            value={currentEmail} 
            onChange={onChangeHandler}
          />
          <MyPageTitle>계정 비밀번호</MyPageTitle>
          <MyPageInput 
            type="password"
            name="currentPassword"
            placeholder="계정 비밀번호" 
            value={currentPassword} 
            onChange={onChangeHandler}
          />
          <Textbox>
            <Warning>※ 반드시 본인의 이메일을 입력해주세요.</Warning>
            <Alert>※ 계정 분실 시 아이디/비밀번호 찾기, 개인정보 관련 주요 고지사항 안내 등에 사용됩니다.</Alert>
          </Textbox>
          <MyPageButton margin="20px 0px 20px 0px">이메일 변경</MyPageButton>
        </StyledBox>
      </form>
      <Footer/>
    </>
  )
}

export default withRouter(Email)
