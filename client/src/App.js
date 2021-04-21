import React from 'react';
import styled from 'styled-components';
import {Router, Route, Switch } from 'react-router-dom';
import {colors} from './components/elements'
import history from './history';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Notes from './pages/notes/Notes';
import Signup from './pages/user/Signup';
import Signin from './pages/user/Signin';

const MainContainer = styled.main`
  *{
    margin: 0;
    box-sizing: border-box;
    a {
      text-decoration: none;
      color: ${colors.white};
    }
    ul {
      list-style-type: none;
    }
  }
  width: 100%;
  max-width: 1300px;
  border: 2px solid red;
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
`;

const App = () => {
  return (
    <MainContainer>
      <Router history={ history }>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/api/users/signup' exact component={Signup} />
          <Route path='/api/users/signin' exact component={Signin} />
          <Route path='/api/users/notes' exact component={Notes} />
        </Switch>
      </Router>
    </MainContainer>
  );
};

export default App;
