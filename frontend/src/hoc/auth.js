import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../actions/actions";

export default function Auth(Component, option) {
  // null => 아무나 출입가능
  // true => 로그인한 유저만 출입 가능
  // false => 로그인한 유저는 출입 불가능
  function AuthCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/");
          }
        } else {
          if (!option) {
            props.history.push("/board");
          }
        }
      });
    }, []);

    return <Component />;
  }

  return AuthCheck;
}
