import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 13px;
  line-height: 40px;
`

const BoardInput = function({name, placeholder, value, onChange}) {
  return (
    <Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
    />
  );   
}

export default BoardInput;