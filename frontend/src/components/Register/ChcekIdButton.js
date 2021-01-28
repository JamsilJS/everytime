import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* 공통 스타일 */
  width: 18%;
  outline: none;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  /* 색상 */
  background: #bbb;

  /* 크기 */
  height: 25px;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 25px;
`;

const CheckIdButton = function ({ onClick, children }) {
  return (
    <div>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </div>
  );
};

export default CheckIdButton;
