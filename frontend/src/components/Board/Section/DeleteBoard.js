import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';

const Button = styled.button`
  color: #c62912;
  font-size: 12px;
  line-height: 22px;
`

function DeleteBoard(props) { 
  const onDelete = () => {
    let variables = {
        boardFrom: props.board,
        userFrom: props.user,
    }
    let confirmDelete = window.confirm("삭제하시겠습니까?");
    confirmDelete && axios.post("/board/deleteBoard", variables)
    .then(response => {
        if(response.data.success) {
            alert("게시글 삭제에 성공했습니다.");
            props.onRemove(response.data.result._id);
        } else {
            alert("게시글 삭제에 실패했습니다.");
        }
    }) 
  }
  return(
    <Button onClick={onDelete}>
        삭제
    </Button>
  )
}

export default withRouter(DeleteBoard);

