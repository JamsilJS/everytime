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
    line-height: 18px;
    margin-top: 16px;
`;

const Button = styled.button`
    background-color: #c62917;
    color: #fff;
    width: 100%;
    height: 40px;
    margin: 30px 0px 20px 0px;
    font-size: 15px;
    text-align: center;
    border-radius: 10px;
`;


function WithDrawal({history}) {
    
    const [CurrentPassword, setCurrentPassword] = useState("");
    const userFrom = localStorage.getItem('userId');

    const onChangeHandler = (e) => {
        setCurrentPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            _id: userFrom,
            password: CurrentPassword
        }
        axios.post('/user/withdrawal', body)
            .then((response) => {
                console.log(response);
                if(!response.data.changeSuccess) {
                    alert(response.data.message);
                } else {
                    if(response.data.changeSuccess) {
                        alert("회원탈퇴가 완료되었습니다.");
                        history.push("/");
                    } else {
                        alert("회원탈퇴에 실패했습니다.")
                    }
                }
            })
    }

    return (
        <>
            <Header title = '회원탈퇴' backbutton={true}/>
            <MenuBox>
                <form onSubmit={onSubmitHandler}>
                    <Title>계정 비밀번호</Title>
                    <Input 
                        placeholder="계정 비밀번호" 
                        value={CurrentPassword} 
                        onChange={onChangeHandler} 
                    />
                    <Alert>
                        ※ 개인정보, 시간표 등의 데이터가 삭제되며, 복구할 수 없습니다.
                        <br/> ※ 작성한 게시물은 삭제되지 않으며, 알수없음으로 닉네임이 표시됩니다.
                        <br/> ※ 자세한 내용은 개인정보 처리방침을 확인해주세요.
                    </Alert>
                    <Button type="submit">회원탈퇴</Button>
                </form>
            </MenuBox>
            <Footer/>
        </>
    )
}

export default withRouter(WithDrawal);
