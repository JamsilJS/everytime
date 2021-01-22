import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    text-align: center;
`

const Project = styled.span`
    color: #999;
    font-size: 12px;
    font-weight: normal;
    margin-right: 4px;
`

const Copyright = styled.span`
    color: #aaa;
    font-size: 12px;
    font-weight: normal;
`

function Footer() {
    return (
        <Container>
            <Project>© 에브리타임 클론코딩</Project>
            <Copyright> All rights reserved by Boeun, Jiyeon </Copyright>
        </Container>
    )
}

export default Footer;
