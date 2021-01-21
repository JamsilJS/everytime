import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./image/logo.jpg";

const StyledHeader = styled.div`
    background-color: #fff;
    width: 100%;
    height: 56px;
    padding: 0px 4px;
    font-size: 15px;
    text-align: left;
    line-height: 56px;
`;

const Logo = styled.img`
    width: 36px;
    height: 36px;
    vertical-align: middle;
    cursor: pointer;
`;

const HeaderTitle = styled.span`
    color: #454545;
    font-weight: bold;
`;

function Header(props) {
    return (
        <StyledHeader>
            <Link to="/Board">
            <Logo src={logo} alt="logo" />
            </Link>
            <HeaderTitle>{props.title}</HeaderTitle>
        </StyledHeader>
    )
}

export default Header;
