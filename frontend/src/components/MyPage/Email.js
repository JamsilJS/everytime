import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { withRouter } from 'react-router-dom';

const MenuBox = styled.ul`
  color: #212121;
  width: 100%;
  margin: 8px 0px 16px 0px;
  padding: 20px 24px;
  border-radius: 10px;
  border: 1px solid #eee;
  box-sizing: border-box;
  line-height: 40px;
`;

const Title = styled.h2`
    color: #757575;
    font-size: 12px;
    font-weight: bold;
    line-height: 24px;
    padding-left: 4px;
    margin-top: 10px;
`;

const Input = styled.input`
    background-color: #f9f9f9;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin: 4px 0px;
    border: 1px solid #efefef;
    border-radius: 10px;
    box-sizing: border-box;
`;

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

const Button = styled.button`
    background-color: #c62917;
    color: #fff;
    width: 100%;
    height: 40px;
    margin: 20px 0px 20px 0px;
    font-size: 15px;
    text-align: center;
    border-radius: 10px;
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
        console.log(response);
        setInput({
            currentEmail: response.data.email,
            currentPassword: "",
        });
        })
    },[])

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
                        console.log(response);
                        alert("이메일이 변경되었습니다.")
                    } else {
                        alert("이메일 변경에 실패했습니다.")
                    }
                }
            })
    }

    return (
        <>
            <Header title="이메일 변경" backbutton={true} />
            <form onSubmit={onSubmitHandler}>
                <MenuBox>
                    <Title>이메일</Title>
                    <Input 
                        name="currentEmail"
                        placeholder="이메일" 
                        value={currentEmail} 
                        onChange={onChangeHandler}
                    />
                    <Title>계정 비밀번호</Title>
                    <Input 
                        name="currentPassword"
                        placeholder="계정 비밀번호" 
                        value={currentPassword} 
                        onChange={onChangeHandler}
                    />
                    <Textbox>
                        <Warning>※ 반드시 본인의 이메일을 입력해주세요.</Warning>
                        <Alert>※ 계정 분실 시 아이디/비밀번호 찾기, 개인정보 관련 주요 고지사항 안내 등에 사용됩니다.</Alert>
                    </Textbox>
                    <Button>이메일 변경</Button>
                </MenuBox>
            </form>
            <Footer/>
        </>
    )
}

export default withRouter(Email)
