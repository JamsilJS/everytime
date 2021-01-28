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
      })
      .catch((e) => alert(`좋아요한 게시글을 불러오는데 실패했습니다.`));
  };

  useEffect(() => {
    getMyLike();
  }, []);

  return (
    <>
        <Header title="내가 좋아요한 글" backbutton={true} />
        { myLikes && myLikes.map((board, index) => {
            console.log('board',board)
            return(
                <React.Fragment key={index}>
                    <Link to={`../board/${board._id}`}>
                        <AddBoard
                        writer={board.boardWriter}
                        title={board.boardTitle}
                        content={board.boardContent}
                        />
                    </Link>
                </React.Fragment>
            )})
        }
    </>
)
}

export default withRouter(Favorite);
