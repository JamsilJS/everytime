import styled, { css } from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Board from './pages/Board'
import MyPage from './pages/MyPage'

const Container = styled.div`
  margin: 50px auto;
  width: 370px;
`;

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/board' component={Board}/>
          <Route path='/mypage' component={MyPage}/>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
