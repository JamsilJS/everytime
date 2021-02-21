import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import Header from '../../Common/Header';
import AddBoard from '../../Board/Section/AddBoard';
import StyledBox from '../../Style/styledBox';

const Warning = styled.p`
  color: #c62917;
  font-size: 15px;
  line-height: 18px;
  font-weight: normal;
  text-align: center;
  padding: 50px 0px;
`;

function MyBoardList({history}) {
  const [MyBoard, setMyBoard] = useState([]);
  useEffect(() => {
    const userFrom = window.localStorage.getItem('userId');
    axios.post('/user/myBoard', {'userFrom': userFrom})
      .then(response => {
        if(response.data.success) {
          setMyBoard(response.data.boards);
        } else {
          alert("게시글 정보를 가져오는데 실패했습니다.")
        }
      })
  }, [])

  const onRemove = (id) => {
    setMyBoard(MyBoard.filter(MyBoard => MyBoard._id !== id))
    history.push("/mypage/boardlist")
  }

  return (
    <>
      <Header title="내가 쓴 글" link="/board" backbutton={true} />
      {(MyBoard.length === 0) &&
        <StyledBox>
          <Warning>게시글 목록이 없습니다.</Warning>
        </StyledBox>
      }
      { MyBoard && MyBoard.map((board, index) => {
        return(
          <React.Fragment key={index}>
            <Link to={`../board/${board._id}`}>
              <AddBoard
                id={board._id}
                user={board.userFrom}
                time={board.createdAt}
                writer={board.boardWriter}
                title={board.boardTitle}
                content={board.boardContent}
                onRemove={onRemove}
              />
            </Link>
          </React.Fragment>
        )})
      }
    </>
  )
}

export default withRouter(MyBoardList);
