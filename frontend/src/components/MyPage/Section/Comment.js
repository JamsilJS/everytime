import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Header from "../../Common/Header";
import AddComment from "../../Board/Section/AddComment";

function Comment() {
  const [myComments, setMyComments] = useState();
  const getMyComments = () => {
    let userId = window.localStorage.getItem("userId");
    axios
      .post(`/comment/comments`, { userFrom: userId })
      .then((response) => {
        setMyComments(response.data.comments);
      })
      .catch((e) => alert(`댓글을 불러오는데 실패했습니다.`));
  };

  useEffect(() => {
    getMyComments();
  }, []);
  return (
    <>
      <Header title="내가 댓글 단 글" link="/board" backbutton={true} />
      {myComments &&
        myComments.map((comments, index) => {
          return (
            <React.Fragment key={index}>
              <Link to={`../board/${comments.boardFrom}`}>
                <AddComment
                  id={comments.commentFrom}
                  time={comments.createdAt}
                  writer={comments.commentWriter}
                  content={comments.commentContent}
                />
              </Link>
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(Comment);
