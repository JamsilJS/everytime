import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profile from "../image/profile.png";
import {Link} from 'react-router-dom';

const ProfileImage = styled.img`
  width: 68px;
  height: 68px;
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

const UserProfile = function() {

  const [User, setUser] = useState({
    userId: "",
    userPassword: "",
    userEmail: "",
    userNickname: "",
    userEntranceYear: "",
    userSchool: "",
  })

  const { userId, userPassword, userEmail, userNickname, userEntranceYear, userSchool } = User;

  return (
      <div>
        <Link to="/MyPage">
          <ProfileImage src= {profile} alt="profile"></ProfileImage>
        </Link>
        <Nickname>{userNickname}</Nickname>
        <ProfileID>{userId}</ProfileID>
        <ProfileID>{userSchool}</ProfileID>
      </div>
  );
}

export default UserProfile;
  