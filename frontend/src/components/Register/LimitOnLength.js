import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  font-size: 12px;
  color: #c62917;
  margin: 5px 0;
`;

const LimitOnLength = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

export default LimitOnLength;
