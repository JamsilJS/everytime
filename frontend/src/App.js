import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./pages/Board";
import BoardDetail from "./components/Board/BoardDetail";
import MyPage from "./pages/MyPage";
import Auth from "./hoc/auth";

const Container = styled.div`
  margin: 10px auto;
  width: 370px;
`;

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Auth(Login, false)}></Route>
          <Route path="/register" component={Auth(Register, false)} />
          <Route path="/board" component={Auth(Board, true)} />
          <Route path="/board/:boardId" component={Auth(BoardDetail, true)} />
          <Route path="/mypage" component={Auth(MyPage, true)} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
