import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #c62917;
    color: #fff;
    width: 100%;
    height: 40px;
    font-size: 15px;
    text-align: center;
    border-radius: 10px;
    margin: ${(props) => props.margin || "30px 0px 20px 0px"};
`;

function MyPageButton({children, margin}) {
    return (
        <Button type="submit" margin={margin}>{children}</Button>
    )
}

export default MyPageButton;