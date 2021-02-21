import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
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
      <Header title="내가 좋아한 글" link="/board" backbutton={true} />
      {(myLikes.length === 0) &&
        <StyledBox>
          <Warning>좋아요 목록이 없습니다.</Warning>
        </StyledBox>
      }
      { myLikes && myLikes.map((likes, index) => {
        return(
          <React.Fragment key={index}>
            <Link to={`../board/${likes.boardFrom}`}>
              <AddBoard
                id={likes.boardFrom}
                time={likes.createdAt}
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
