import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";

function Favorite() {
  const [myLikes, setMyLikes] = useState([]);
  const getMyLike = () => {
    let userId = window.localStorage.getItem("userId");
    axios
      .get(`/like/likes`, { userFrom: userId })
      .then((response) => {
        setMyLikes(response.data.likes);
      })
      .catch((e) => alert(`좋아요한 게시글을 불러오는데 실패했습니다.`));
  };

  useEffect(() => {
    getMyLike();
  }, []);

  return <></>;
}

export default Favorite;
