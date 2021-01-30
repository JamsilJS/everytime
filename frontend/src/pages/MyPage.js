import React from "react";
import { Route, withRouter } from "react-router-dom";
import PageList from "../components/MyPage/PageList";
import Nickname from "../components/MyPage/Section/Nickname";
import Email from "../components/MyPage/Section/Email";
import Password from "../components/MyPage/Section/Password";
import MyBoardList from "../components/MyPage/Section/MyBoardList";
import Comment from "../components/MyPage/Section/Comment";
import Favorite from "../components/MyPage/Section/Favorite";
import WithDrawal from "../components/MyPage/Section/WithDrawal";

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
