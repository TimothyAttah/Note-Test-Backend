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
import NotesDelete from './pages/notes/NotesDelete';
import NotesCreate from './pages/notes/NotesCreate';
import { user } from './components/NameInitials';
import Profile from './pages/profile/Profile';
import Todos from './pages/todos/Todos';
import UserProfile from './pages/profile/UserProfile';
import FriendsProfile from './pages/profile/FriendsProfile';

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
    if ( user ) {
      dispatch( getUsers() );
    } else {
      history.push( '/api/users/signin' );
   }
  },[dispatch])
  return (
    <MainContainer>
      <Router history={ history }>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/api/users/signup' component={Signup} />
          <Route path='/api/users/signin' component={Signin} />
          <Route path='/api/users/profile' exact component={Profile} />
          <Route path='/api/users/friends/profile' component={FriendsProfile} />
          <Route path='/api/auth/users/:id/user/profile' exact component={UserProfile} />
          <Route path='/api/users/notes' exact component={Notes} />
          <Route path='/api/users/notes/:noteId/delete' component={NotesDelete} />
          <Route path='/api/users/notes/create/note' component={NotesCreate} />
          <Route path='/api/users/todos' exact component={Todos} />
        </Switch>
      </Router>
    </MainContainer>
  );
};

export default App;
