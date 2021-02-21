import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import UpdateTime from '../../Common/UpdateTime';
import profile from '../../../assets/profile.png';
import DeleteBoard from './DeleteBoard';

const BoardBox = styled.div`
  background-color: #fff;
  color: #353535;
  font-size: 13px;
  padding: 14px 12px;
  border: 1px solid #ddd;
  margin: 0px -1px -1px -1px;
`
const BoardUser = styled.div`
  display: flex;
  height: 22px;
  margin-top: 2px;
  margin-bottom: 12px;
  justify-content: space-between;
`
const BoardUserImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-right: 6px;
`
const BoardUserID = styled.p`
  color: #757575;
  font-size: 12px;
  font-weight: bold;
  line-height: 22px;
`
const BoardTime = styled.div`
  color: #aaa;
  font-size: 12px;
  line-height: 22px;
  padding-left: 8px;
  text-align: left;
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

function AddBoard(props) {
  const currentUser = window.localStorage.getItem('userId');
  return (
    <>
      <BoardBox key={props.id}>
        <BoardUser>
          <span style={{display: 'flex'}}>
            <BoardUserImg src={profile} alt="profile"/>
            <BoardUserID>{props.writer}</BoardUserID>
            <BoardTime>
              <UpdateTime time={props.time}/>
            </BoardTime>
          </span>
          { props.user === currentUser 
            ? <DeleteBoard 
                board={props.id} 
                user={props.user} 
                history={props.history}
                onRemove={props.onRemove}
              /> 
            : null }
        </BoardUser>
        <Link to={`/board/${props.id}`}>
          <BoardTitle>{props.title}</BoardTitle>
          <BoardContent>{props.content}</BoardContent>
        </Link>
        <div style={{textAlign: "right"}}>
          <LikeButton 
            boardId={props.id} 
            boardWriter={props.writer} 
            boardTitle={props.title} 
            boardContent={props.content}
          />
          <Link to={`/board/${props.id}`}>
            <CommentButton boardId={props.id} />
          </Link>
        </div>
      </BoardBox>
    </>
  )
}

export default withRouter(AddBoard);
