import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import comment from '../../../assets/comment.png';

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

function CommentButton({boardId}) {
  const userFrom = localStorage.getItem("userId");
  const [CommentCounts, setCommentCounts] = useState(0);
  let variables = {
    userFrom: userFrom,
    boardFrom: boardId,
  };
  useEffect(() => {
    axios
      .post("/comment/getComment", variables)
      .then((response) => {
        if(response.data.success) {
          setCommentCounts(response.data.commentCounts);
        } else {
          alert("댓글을 보여줄 수 없습니다.");
        }
      })
  },[])
  return (
    <button>
        <ButtonImage src={comment} alt="comment" />
        <CommentCounted>{CommentCounts}</CommentCounted>
    </button>
  )
}

export default CommentButton;
