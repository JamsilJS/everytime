import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import vote from '../Common/image/vote.png';

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

function LikeButton({boardId}) {

    const userFrom = localStorage.getItem('userId');
    const [ LikeCNT, setLikeCNT ] = useState(0);
    const [ Liked, setLiked ] = useState(false);

    let variables = {
        userFrom: userFrom,
        boardFrom: boardId,
    };

    const handleLike = () => {
      axios.post("/", variables).then((response) => {
        console.log(response);
      });
    };
    

    return (
        <>
            <button onClick={handleLike}>
                <ButtonImage src={vote} alt="vote" />
                <LikeCounted>{LikeCNT}</LikeCounted>
            </button>
        </>
    )
}

export default LikeButton;
