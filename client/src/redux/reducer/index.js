import { combineReducers } from 'redux';
import auth from './authReducer'
import notesReducer from './notesReducer';
import todosReducer from './todosReducer';

export default combineReducers( {
  auth,
  notesReducer,
  todosReducer
} );
