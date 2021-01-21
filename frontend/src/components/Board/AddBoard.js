import React from 'react';
import styled from 'styled-components';
import profile from '../Common/image/profile.png';
import comment from '../Common/image/comment.png';
import vote from '../Common/image/vote.png';

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
  margin-bottom: 10px;
`

const BoardUserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-right: 4px;
`
const BoardUserID = styled.p`
  color: #353535;
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
  margin-bottom: 16px;
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

function AddBoard(props) {
    return (
      <>
          <BoardBox>
              <BoardUser>
                  <BoardUserImg src={profile} alt="profile"/>
                  <BoardUserID>익명</BoardUserID>
              </BoardUser>
              <BoardTitle>{props.title}</BoardTitle>
              <BoardContent>{props.content}</BoardContent>
              <Buttons>
                  <button>
                    <ButtonImage src={vote} alt="vote"/>
                    <LikeCounted>0</LikeCounted>
                  </button>
                  <button>
                    <ButtonImage src={comment} alt="comment"/>
                    <CommentCounted>0</CommentCounted>
                  </button>
              </Buttons>
        </BoardBox>
      </>
    )
}

export default AddBoard;
