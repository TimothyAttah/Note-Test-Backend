import { combineReducers } from 'redux';
import auth from './authReducer'
import notesReducer from './notesReducer';

export default combineReducers( {
  auth,
  notesReducer
} );
