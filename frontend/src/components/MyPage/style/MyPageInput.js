import React from 'react';
import styled from 'styled-components';

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

function MyPageInput({...children}) {
    return (
        <Input {...children} />
    )
}

export default MyPageInput;
