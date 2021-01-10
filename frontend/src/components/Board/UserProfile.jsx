import React from 'react';
import {Link} from 'react-router-dom';
import styled, { css } from 'styled-components';
import profileImage from '../image/profile.png';

const ProfileImage = styled.img`
  width: 68px;
  height: 68px;
  margin: 40px 0px 10px 0px;
  border-radius: 6px;
  pointer: cursor;
`

const ProfileUser = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`

const UserTitle = styled.div`
  color: #999;
  font-size: 12px;
`

function UserProfile() {
    return (
        <>
          <Link to="/MyPage">
            <ProfileImage src= {profileImage} alt="profile"></ProfileImage>
          </Link>
          <ProfileUser>쿠크바사삭</ProfileUser>
          <UserTitle>박지연</UserTitle>
          <UserTitle>nm1993</UserTitle>
        </>
    );
  }
  
  export default UserProfile;
  