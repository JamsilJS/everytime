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

const Alert = styled.p`
    color: #757575;
    font-size: 12px;
    font-weight: normal;
`;

const Warning = styled.strong`
    color: #c62917;
    margin-left: 4px;
    font-weight: normal;
`;

const Button = styled.button`
    background-color: #c62917;
    color: #fff;
    width: 100%;
    height: 40px;
    margin: 10px 0px 20px 0px;
    font-size: 15px;
    text-align: center;
    border-radius: 10px;
`;

function Nickname({ history }) {
    const userFrom = localStorage.getItem('userId');
    const [CurrentNickname, setCurrentNickname] = useState("");
    
    useEffect(() => {
    axios.get('/user', {_id: userFrom})
        .then((response) => {
        console.log(response);
        setCurrentNickname(response.data.nickname);
        })
    },[userFrom])

    const onChangeHandler = (e) => {
        setCurrentNickname(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            _id: userFrom,
            nickname: CurrentNickname
        }
        axios.post('/user/update/nickname', body)
            .then((response) => {
                if(response.status === 200) {
                    alert("닉네임이 변경되었습니다.");
                    history.push("/mypage");
                } else {
                    alert("닉네임 변경에 실패했습니다.")
                }
            })
    }

    return (
        <>
            <Header title="닉네임 설정" backbutton={true}/>
            <MenuBox>
                <form onSubmit={onSubmitHandler}>
                    <Title>닉네임</Title>
                    <Input 
                        placeholder="닉네임" 
                        value={CurrentNickname} 
                        onChange={onChangeHandler} 
                    />
                    <Alert>※ 닉네임을 설정하면 
                        <Warning>30일간 변경 할 수 없습니다.</Warning>
                    </Alert>
                    <Button type="submit">닉네임 변경</Button>
                </form>
            </MenuBox>
            <Footer/>
        </>
    )
}

export default withRouter(Nickname);
