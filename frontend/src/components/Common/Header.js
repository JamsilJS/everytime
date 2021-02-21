import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import back from "../../assets/cancel.png";

const StyledHeader = styled.div`
    display: flex;
    color: #353535;
    background-color: #fff;
    width: 100%;
    height: 56px;
    padding: 0px 8px;
    margin-bottom: 8px;
    justify-content: space-between;
`
const Logo = styled.img`
    width: 30px;
    height: 32px;
    vertical-align: middle;
    cursor: pointer;
`
const HeaderTitle = styled.span`
    color: #454545;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    line-height: 56px;
    padding-left: 8px;
`
const BackButton = styled.div`
    line-height: 56px;
    margin-right: 4px;
`
const Border = styled.button`
    border: 1px solid #f8e1e0;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border-radius: 4px;
    vertical-align: middle;
    cursor: pointer;
`
const Back = styled.img`
    width: 10px;
`

function Header(props) {
  return (
    <StyledHeader>
      <div style={{width: '140px'}}>
        <Link to={props.link}>
          <Logo src={logo} alt="logo"/>
        </Link>
        <HeaderTitle>{props.title}</HeaderTitle>
      </div>
      { props.backbutton &&
        <Link to="./">
          <BackButton style={{lineHeight:'56px'}}>
            <Border>
              <Back src={back} alt="back" />
            </Border>
          </BackButton>
        </Link>
      }
    </StyledHeader>
  )
}

export default Header;
