import { combineReducers } from 'redux';
import auth from './authReducer'
import notesReducer from './notesReducer';
import todosReducer from './todosReducer';
import usersReducer from './usersReducer';
import incomesReducer from './incomeReducer';
import expensesReducer from './expensesReducer';

export default combineReducers( {
  auth,
  notesReducer,
  todosReducer,
  usersReducer,
  incomesReducer,
  expensesReducer,
} );
