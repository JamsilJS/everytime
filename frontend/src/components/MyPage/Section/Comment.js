import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "../../Common/Header";
import AddBoard from "../../Board/Section/AddBoard";
import StyledBox from '../../Style/styledBox';

const Warning = styled.p`
    color: #c62917;
    font-size: 15px;
    line-height: 18px;
    font-weight: normal;
    text-align: center;
    padding: 50px 0px;
`;

function Comment() {
  const [CommentsFrom, setCommentsFrom] = useState([]);

  useEffect(() => {
    getMyComments();
  }, []);

  const getMyComments = () => {
    let userId = window.localStorage.getItem("userId");
    axios
      .post(`/comment/comments`, { userFrom: userId })
      .then((response) => {
        saveOptions(response.data.comments);
      })
      .catch((e) => alert(`댓글을 불러오는데 실패했습니다.`));
  };

  const saveOptions = (comments) => {
    const commentsList = [];
    comments.forEach( element => {
      commentsList.push(element.boardFrom);
    })
    setCommentsFrom([...new Set(commentsList.map(JSON.stringify))].map(JSON.parse));
  }

  const onRemove = (id) => {
    setCommentsFrom(CommentsFrom.filter(CommentsFrom => CommentsFrom._id !== id))
  }

  return (
    <>
      <Header title="내가 댓글 단 글" link="/board" backbutton={true} />
      {(CommentsFrom.length === 0) &&
        <StyledBox>
          <Warning>댓글 목록이 없습니다.</Warning>
        </StyledBox>
      }
      {CommentsFrom &&
        CommentsFrom.map((board, index) => {
          return (
            <React.Fragment key={index}>
                <AddBoard
                  id={board._id}
                  user={board.userFrom}
                  time={board.createdAt}
                  writer={board.boardWriter}
                  title={board.boardTitle}
                  content={board.boardContent}
                  onRemove={onRemove}
                />
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(Comment);
