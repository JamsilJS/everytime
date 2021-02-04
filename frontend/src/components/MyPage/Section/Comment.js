import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Header from "../../Common/Header";
import AddBoard from "../../Board/Section/AddBoard";

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
      console.log(comments)
      commentsList.push(element.boardFrom);
    })
    console.log({commentsList});
    console.log([...new Set(commentsList.map(JSON.stringify))].map(JSON.parse));
    setCommentsFrom([...new Set(commentsList.map(JSON.stringify))].map(JSON.parse));
  }

  return (
    <>
      <Header title="내가 댓글 단 글" link="/board" backbutton={true} />
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
                />
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(Comment);
