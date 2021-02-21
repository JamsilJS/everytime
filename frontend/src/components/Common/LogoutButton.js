import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../_actions/user_actions";

function LogoutButton(props) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.logoutSuccess) {
        window.localStorage.removeItem("userId");
        props.history.push("/");
      } else {
        alert("로그아웃에 실패했습니다");
      }
    });
  };

  return (
    <>
      <button onClick={handleLogout} style={{color:'inherit', fontSize:'inherit'}}>로그아웃</button>
    </>
  );
}

export default withRouter(LogoutButton);