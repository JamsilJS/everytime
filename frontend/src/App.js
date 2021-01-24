import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./pages/Board";
import MyPage from "./pages/MyPage";
import Auth from "./hoc/auth";
const schoolArr = [
  "서울대학교",
  "카이스트",
  "포항공과대학교",
  "연세대학교",
  "고려대학교",
  "서강대학교",
  "성균관대학교",
  "한양대학교",
  "이화여자대학교",
  "중앙대학교",
  "경희대학교",
  "서울시립대학교",
  "한국외국어대학교",
  "광운대학교",
  "동국대학교",
  "건국대학교",
  "홍익대학교",
  "아주대학교",
  "인하대학교",
  "숙명여자대학교",
  "국민대학교",
  "세종대학교",
  "숭실대학교",
  "덕성여자대학교",
  "서울여자대학교",
  "홍익대학교",
  "가천대학교",
  "경기대학교",
  "단국대학교",
  "동국대학교",
  "명지대학교",
  "신한대학교",
  "한국항공대학교",
  "서울과학기술대학교",
  "서울교육대학교",
  "가톨릭대학교",
  "한국예술종합학교",
  "한성대학교",
  "한국체육대학교",
  "상명대학교",
  "육군사관학교",
  "숭의여자대학교",
  "총신대학교",
  "서경대학교",
  "서울사이버대학교",
  "대진대학교",
  "한국산업기술대학교",
  "한세대학교",
  "용인대학교",
  "안양대학교",
  "연성대학교",
  "인하공업전문대학교",
  "동아방송예술대학교",
  "여주대학교",
  "동남보건대학교",
  "계원예술대학교",
  "성결대학교",
].sort();

const Container = styled.div`
  margin: 50px auto;
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
          <Route path="/mypage" component={Auth(MyPage, true)} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
