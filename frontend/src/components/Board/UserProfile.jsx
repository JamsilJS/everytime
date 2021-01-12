import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 68px;
  height: 68px;
  margin: 36px 0px 10px 0px;
  border-radius: 6px;
  pointer: cursor;
`

const Nickname = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 4px;
`

const ProfileID = styled.div`
  color: #999;
  font-size: 12px;
`

const UserProfile = function({profileImage, id, name, nickname}) {
    return (
        <>
          <Link to="/MyPage">
            <ProfileImage src= {profileImage} alt="profile"></ProfileImage>
          </Link>
          <Nickname>{nickname}</Nickname>
          <ProfileID>{name}</ProfileID>
          <ProfileID>{id}</ProfileID>
        </>
    );
  }
  
  export default UserProfile;
  