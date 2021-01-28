import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* 공통 스타일 */
  width: 100%;
  color: white;
  cursor: pointer;
  text-align: center;

  /* 크기 */
  height: 40px;
  font-size: 16px;
  font-weight: 200;

  /* 색상 */
  background: #c62917;

  margin-top: 6px;
`;

const LoginButton = function ({ type, children }) {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default LoginButton;
