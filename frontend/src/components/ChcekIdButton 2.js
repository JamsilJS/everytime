import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
  /* 공통 스타일 */
  width: 18%;
  outline: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;

  /* 색상 */
  background: #ddd;

  /* 크기 */
  height: 25px;
  margin-top: 5px;
`;

const CheckIdButton = function ({onClick, children}) {
  return (
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
  );
};

export default CheckIdButton
