import React from "react";
import { Route, withRouter } from "react-router-dom";
import MyBoardList from "../components/MyPage/MyBoardList";
import Comment from "../components/MyPage/Comment";
import Email from "../components/MyPage/Email";
import Favorite from "../components/MyPage/Favorite";
import Nickname from "../components/MyPage/Nickname";
import PageList from "../components/MyPage/PageList";
import Password from "../components/MyPage/Password";
import WithDrawal from "../components/MyPage/WithDrawal";

function MyPage({ match }) {
  return (
    <>
      <Route exact path={match.path} component={PageList} />
      <Route path={`${match.path}/nickname`} component={Nickname} />
      <Route path={`${match.path}/email`} component={Email} />
      <Route path={`${match.path}/password`} component={Password} />
      <Route path={`${match.path}/boardlist`} component={MyBoardList} />
      <Route path={`${match.path}/comment`} component={Comment} />
      <Route path={`${match.path}/favorite`} component={Favorite} />
      <Route path={`${match.path}/withdrawal`} component={WithDrawal} />
    </>
  );
}

export default withRouter(MyPage);
