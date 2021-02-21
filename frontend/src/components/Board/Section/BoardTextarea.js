import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  height: 85px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 13px;
  text-align: start;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  vertical-align: middle;
  flex-direction: column;
`

const BoardTextarea = function({name, placeholder, value, onChange }) {
  return (
    <>
      <Textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
      >
      </Textarea>
    </>
  )   
}

export default BoardTextarea;