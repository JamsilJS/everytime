import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profile from "./image/profile.png";
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  margin: 36px 0px 8px 0px;
  border-radius: 6px;
  pointer: cursor;
`

const Nickname = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`

const ProfileID = styled.div`
  color: #999;
  font-size: 13px;
  line-height: 20px;
`

const UserProfile = function(props) {

  const [User, setUser] = useState({
    userId: "",
    userNickname: "",
    userSchool: "",
  })
  const { userId, userNickname, userSchool } = User;

  useEffect(() => {
    const userFrom = localStorage.getItem('userId');
    axios.get('/user/profile', {_id: userFrom})
      .then((response) => {
        setUser({
          userId : response.data.id,
          userNickname: response.data.nickname,
          userSchool: response.data.school
        })
      })
  },[])

  if (props.boardPage) {
    return (
      <div>
        <Link to="/MyPage">
          <ProfileImage src= {profile} alt="profile"></ProfileImage>
        </Link>
        <Nickname>{userNickname}</Nickname>
        <ProfileID>{userId}</ProfileID>
        <ProfileID>{userSchool}</ProfileID>
      </div>
    )
  }
}

export default withRouter(UserProfile);
  