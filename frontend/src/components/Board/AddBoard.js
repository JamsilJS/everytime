import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import profile from '../Common/image/profile.png';
import comment from '../Common/image/comment.png';
import vote from '../Common/image/vote.png';
import { withRouter } from 'react-router-dom';

const BoardBox = styled.div`
  background-color: #fff;
  color: #353535;
  font-size: 13px;
  margin: 10px 10px 0px 10px;
  padding: 15px;
  border: 1px solid #ddd;
`

const BoardUser = styled.div`
  display: flex;
  height: 20px;
  margin-bottom: 12px;
  justify-content: space-between;
`

const BoardUserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-right: 4px;
`
const BoardUserID = styled.p`
  color: #757575;
  font-size: 11px;
  font-weight: bold;
  line-height: 20px;
`

const BoardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`

const BoardContent = styled.div`
  font-weight: normal;
  margin-bottom: 8px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`

const Buttons = styled.div`
  text-align: right;
`

const ButtonImage = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 10px;
`

const LikeCounted = styled.p`
  display: inline-block;
  color: #c62917;
  font-size: 13px;
  padding-left: 4px;
`

const CommentCounted = styled.p`
  display: inline-block;
  color: #0ca5af;
  font-size: 13px;
  padding-left: 4px;
`

function AddBoard({title, content, writer}) {
  const userFrom = localStorage.getItem('userId');
  const { Like, setLike } = useState(0);
  const handleLike = ({ userFrom, likeCnt }) => {
    let variables = {
      userFrom: userFrom,
      likeCnt: Like,
    };
    axios
      .post("/board/like", variables)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
        <BoardBox>
          <BoardUser>
              <span style={{display: 'flex'}}>
                <BoardUserImg src={profile} alt="profile"/>
                <BoardUserID>{writer}</BoardUserID>
              </span>
          </BoardUser>
          <BoardTitle>{title}</BoardTitle>
          <BoardContent>{content}</BoardContent>
          <Buttons>
              <button onClick={handleLike}>
                <ButtonImage src={vote} alt="vote" />
                <LikeCounted>{Like}</LikeCounted>
              </button>
              <button>
                <ButtonImage src={comment} alt="comment" />
                <CommentCounted>0</CommentCounted>
              </button>
          </Buttons>
        </BoardBox>
    </>
  )
}

export default withRouter(AddBoard);
