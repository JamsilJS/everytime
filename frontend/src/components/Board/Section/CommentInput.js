import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 13px;
  line-height: 40px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`

const CommentInput = function({name, placeholder, value, onChange}) {
  return (
    <Input
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );   
}

export default CommentInput;