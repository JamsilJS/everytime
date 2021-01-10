import React from 'react';
import styled, { css } from 'styled-components';
import write from '../image/write.png';

const InputBox = styled.form`
    position: relative;
    padding: 10px;
`

const Input = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 10px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 44px;
`

const InputButton = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 44px;
    height: 44px;
    margin: 10px;
    cursor: pointer;
`

const InputIcon = styled.img`
    width: 30px;
    height: 30px;
`

function BoardInput() {
    return (
        <InputBox>
            <Input type="text" placeholder="새 글을 작성해주세요." ></Input>
            <InputButton>
                <InputIcon src={write}/>
            </InputButton>
        </InputBox>
    )   
}

export default BoardInput;