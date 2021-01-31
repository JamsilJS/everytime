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
    // console.log(props)
    const onDelete = () => {
        let variables = {
            boardFrom: props.board,
            userFrom: props.user,
        }
        axios.post("/board/deleteBoard", variables)
        .then(response => {
            console.log("Delete : ", response);
            if(response.data.success) {
                alert("게시글 삭제에 성공했습니다.");
                props.history.push('/');
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

