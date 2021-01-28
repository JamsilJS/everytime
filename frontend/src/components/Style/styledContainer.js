import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`

function StyledContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default StyledContainer;