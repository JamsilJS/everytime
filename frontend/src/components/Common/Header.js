import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./image/logo.jpg";
import back from "./image/cancel.png";

const StyledHeader = styled.ul`
    display: flex;
    background-color: #fff;
    width: 100%;
    height: 56px;
    padding: 0px 4px;
    font-size: 15px;
    text-align: left;
    line-height: 56px;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 36px;
    height: 36px;
    vertical-align: middle;
    cursor: pointer;\
`;

const HeaderTitle = styled.span`
    color: #454545;
    font-weight: bold;
`;

const Border = styled.button`
    border: 1px solid #f7b9b4;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border-radius: 4px;
    vertical-align: middle;
    cursor: pointer;
`;

const Back = styled.img`
    width: 10px;
`;

function Header(props) {
    
    return (
        <StyledHeader>
            <li>
                <Link to="/board">
                <Logo src={logo} alt="logo" />
                </Link>
                <HeaderTitle>{props.title}</HeaderTitle>
            </li>
            { props.backbutton &&
                <Link to="/mypage">
                    <Border>
                        <Back src={back} alt="back" />
                    </Border>
                </Link>
            }
        </StyledHeader>
    )
}

export default Header;
