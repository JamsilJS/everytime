import React from 'react';
import styled from 'styled-components';

const MenuBox = styled.ul`
    color: #212121;
    width: 100%;
    margin: 8px 0px;
    margin-bottom: 12px;
    border-radius: 10px;
    border: 1px solid #eaeaea;
    box-sizing: border-box;
    background-color: ${(props) => props.backColor || "fff"};
    padding: ${(props) => props.padding || "20px 24px"};
    line-height: ${(props) => props.lineHeight || "40px"};
`;

function StyledBox({children, padding, lineHeight, backColor}) {
    return (
        <MenuBox backColor={backColor} padding={padding} lineHeight={lineHeight}>
            {children}
        </MenuBox>
    )
}

export default StyledBox;