import React from 'react';
import styled from 'styled-components';
import writeIcon from "../../../assets/write.png";
import uncheckWriter from "../../../assets/writer.png";
import checkWriter from "../../../assets/writeractive.png";

const CheckButton = styled.li`
  position: absolute;
  bottom: 0px;
  width: 38px;
  height: 38px;
  left: ${(props) => props.left || "10px"};
`;
const SubmitButton = styled.li`
  background-color: #c62917;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 38px;
  height: 38px;
`;
const InputIcon = styled.img`
  width: 38px;
  height: 38px;
`;

function CheckNickname({icon, left, click, submit}) {
  return (
    <>
      <CheckButton left={left} onClick={click}>
          {icon &&
              <InputIcon src={checkWriter} />
          }
          {!icon &&
              <InputIcon src={uncheckWriter} />
          }
      </CheckButton>
      <SubmitButton onClick={submit}>
          <InputIcon src={writeIcon} />
      </SubmitButton>
    </>
  )
}

export default CheckNickname;
