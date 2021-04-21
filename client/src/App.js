import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { colors } from './components/elements'
import { getUsers } from './redux/actions/authActions';
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
  toast.configure()
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( getUsers() );
  },[dispatch])
  return (
    <MainContainer>
      <Router history={ history }>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/api/users/signup' component={Signup} />
          <Route path='/api/users/signin' component={Signin} />
          <Route path='/api/users/notes' exact component={Notes} />
        </Switch>
      </Router>
    </MainContainer>
  );
};

export default App;
