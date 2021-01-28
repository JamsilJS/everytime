import React from 'react';
import styled from 'styled-components';
import writeIcon from "../../assets/write.png";
import uncheckWriter from "../../assets/writer.png";
import checkWriter from "../../assets/writeractive.png";

const CheckButton = styled.li`
  position: absolute;
  bottom: 0px;
  left: 10px;
  width: 38px;
  height: 38px;
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

function BoardButtons({icon, click, submit}) {
    // console.log('icon',icon);
    return (
        <>
            <CheckButton onClick={click}>
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

export default BoardButtons
