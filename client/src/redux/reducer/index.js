import { combineReducers } from 'redux';
import auth from './authReducer'
import notesReducer from './notesReducer';
import todosReducer from './todosReducer';
import usersReducer from './usersReducer';

export default combineReducers( {
  auth,
  notesReducer,
  todosReducer,
  usersReducer
} );
