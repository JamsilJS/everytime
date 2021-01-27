import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import comment from '../Common/image/comment.png';

const ButtonImage = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 10px;
`

const CommentCounted = styled.p`
  display: inline-block;
  color: #0ca5af;
  font-size: 13px;
  padding-left: 4px;
`

function CommentButton() {

    return (
        <button>
            <ButtonImage src={comment} alt="comment" />
            <CommentCounted>0</CommentCounted>
        </button>
    )
}

export default CommentButton;
