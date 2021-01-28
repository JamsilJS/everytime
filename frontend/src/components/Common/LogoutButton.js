import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../_actions/user_actions";

const Profilebtn = styled.button`
  display: inline-block;
  width: 64px;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 15px 3px;
  font-size: 13px;
  line-height: 28px;
  color: #505050;
`;

function LogoutButton(props) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser()).then((response) => {
      console.log(response);
      if (response.payload.logoutSuccess) {
        window.localStorage.removeItem("userId");
        props.history.push("./");
      } else {
        alert("로그아웃에 실패했습니다");
      }
    });
  };

  return (
    <>
      <Link to="/mypage">
        <Profilebtn>내정보</Profilebtn>
      </Link>
      <Profilebtn onClick={handleLogout}>로그아웃</Profilebtn>
    </>
  );
}

export default withRouter(LogoutButton);
