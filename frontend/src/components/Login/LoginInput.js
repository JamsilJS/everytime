import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  /* 공통 스타일 */
  width: 100%;
  outline: none;
  border: 1px solid #ededed;
  box-sizing: border-box;
  color: #333;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  /* 색상 */
  background: #fff;

  /* 크기 */
  height: 40px;
  margin-top: 5px;
`;

const LoginInput = function ({ type, name, placeholder, onChange, value }) {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default LoginInput;
