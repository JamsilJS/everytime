import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import profile from '../Common/image/profile.png';
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

function AddBoard({id, title, content, writer}) {
  return (
    <>
        <BoardBox key={id}>
          <BoardUser>
              <span style={{display: 'flex'}}>
                <BoardUserImg src={profile} alt="profile"/>
                <BoardUserID>{writer}</BoardUserID>
              </span>
          </BoardUser>
          <BoardTitle>{title}</BoardTitle>
          <BoardContent>{content}</BoardContent>
          <Buttons>
              <LikeButton boardId={id}/>
              <CommentButton/>
          </Buttons>
        </BoardBox>
    </>
  )
}

export default withRouter(AddBoard);
