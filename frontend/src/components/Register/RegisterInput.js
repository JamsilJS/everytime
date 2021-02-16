import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 12px;
  color: #777;
  padding-left: 5px;
`;
const StyledInput = styled.input`
  /* 공통 스타일 */
  width: 100%;
  outline: none;
  border: 1px solid #ededed;
  border-radius: 12px;
  box-sizing: border-box;
  color: #333;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  /* 색상 */
  background: #f9f9f9;
  &:focus {
    background: #fff;
  }

  /* 크기 */
  height: 40px;
  margin: 4px 0;
`;

const RegisterInput = function ({
  labelName,
  name,
  type,
  placeholder,
  onChange,
  value,
}) {
  return (
    <StyledLabel>
      {labelName}
      <StyledInput
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </StyledLabel>
  );
};

export default RegisterInput;
