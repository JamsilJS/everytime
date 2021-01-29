import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import AddBoard from "../Board/AddBoard";
import Header from "../Common/Header";

function Favorite() {
  const [myLikes, setMyLikes] = useState([]);
  const getMyLike = () => {
    let userId = window.localStorage.getItem("userId");
    axios
      .post(`/like/likes`, { userFrom: userId })
      .then((response) => {
        setMyLikes(response.data.likes);
        console.log(myLikes)
      })
      .catch((e) => alert(`좋아요한 게시글을 불러오는데 실패했습니다.`));
  };

  useEffect(() => {
    getMyLike();
  }, []);

  return (
    <>
        <Header title="내가 좋아한 글" link="/board" backbutton={true} />
        { myLikes && myLikes.map((likes, index) => {
            console.log('likes',likes)
            return(
                <React.Fragment key={index}>
                    <Link to={`../board/${likes.boardFrom}`}>
                        <AddBoard
                          id={likes.boardFrom}
                          writer={likes.boardWriter}
                          title={likes.boardTitle}
                          content={likes.boardContent}
                        />
                    </Link>
                </React.Fragment>
            )})
        }
    </>
)
}

export default withRouter(Favorite);
