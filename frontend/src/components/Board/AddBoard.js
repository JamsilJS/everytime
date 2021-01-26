import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import profile from '../Common/image/profile.png';
import comment from '../Common/image/comment.png';
import vote from '../Common/image/vote.png';
import back from '../Common/image/cancel.png';

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
  margin-bottom: 14px;
  justify-content: space-between;
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

const Back = styled.img`
    width: 10px;
`;

const BoardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`

const BoardContent = styled.div`
  font-weight: normal;
  margin-bottom: 14px;
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

function AddBoard() {

  const [Content, setContent] = useState([]);
  useEffect(() => {
      FetchBoard();
  }, [])

  const FetchBoard = () => {
    axios.get("/board/getboard")
      .then((response) => {
        console.log(response);
        if(response.data.success) {
          setContent([...Content, ...response.data.boards]);
        } else {
          alert("게시글을 보여줄 수 없습니다.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

const onClickHandler = (boardFrom, board_id) => {
  const variables = {
    boardFrom: boardFrom,
    _id: board_id,
  }

  axios.post("/board/deleteBoard", variables)
    .then(response => {
      console.log(response);
      console.log(variables);
      if(response.data.success) {
        FetchBoard();
      } else {
        alert("게시글 삭제에 실패했습니다.")
      }
    })
}

  return (
    <>
      { Content && Content.map((board, index) => {
        return(
            <React.Fragment key={index}>
              <BoardBox>
                <BoardUser>
                    <span style={{display: 'flex'}}>
                      <BoardUserImg src={profile} alt="profile"/>
                      <BoardUserID>익명</BoardUserID>
                    </span>
                    <span>
                      <button onClick={() => onClickHandler(board.boardFrom, board._id)}>
                        <Back src={back} alt="back" />
                      </button>
                    </span>
                </BoardUser>
                <BoardTitle>{board.boardTitle}</BoardTitle>
                <BoardContent>{board.boardContent}</BoardContent>
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
            </React.Fragment>
        )})
      }
    </>
  )
}

export default AddBoard;
