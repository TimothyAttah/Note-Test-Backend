/* eslint-disable no-empty-pattern */
import axios from 'axios';


export const baseURL = process.env.REACT_APP_BACKEND_API;

const API = axios.create( { baseURL: baseURL } )

API.interceptors.request.use( ( req ) => {
  if ( localStorage.getItem( 'jwt' ) ) {
    req.headers[ 'Authorization' ] = `Bearer ${ localStorage.getItem( 'jwt' ) }`
  }

  return req;
})

export const signupUser = ( userData ) => API.post( '/users/signup', userData );

export const signinUser = ( userData ) => API.post( '/users/signin', userData );

export const getUsers = () => API.get( '/users' );

export const notesCreate = ( notesData ) => API.post( '/notes/create', notesData )

export const allNotes = () => API.get( '/notes' );

export const myNotes = () => API.get( '/notes/user/note' );

export const friendsNotes = () => API.get( '/notes/friends/notes' );

export const likeNotes = ( id ) => API.put( '/notes/like', id );

export const notesDelete = ( noteId ) => API.delete( `/notes/${ noteId }/delete` );

export const getUser = ( id ) => API.get( `/auth/users/${ id }/user` );

export const notesEdit = ( noteId, notesData ) => API.put( `notes/${ noteId }/edit`, notesData );

export const getIncomes = () => API.get( '/incomes/user/incomes' );

export const createIncomes = ( incomeData ) => API.post( '/incomes/add', incomeData );

export const deleteIncome = (incomeId) => API.delete(`incomes/${incomeId}/delete`)

export const getExpenses = () => API.get( '/expenses/user/expenses' );

export const createExpenses = ( expensesData ) => API.post( '/expenses/add', expensesData );

export const deleteExpenses = ( expensesId ) => API.delete( `expenses/${ expensesId }/delete` );

export const listTodos = () => API.get( '/todos/users/todo' );

export const deleteTodos = ( todosId ) => API.delete( `/todos/${ todosId }/delete` );

export const addTodos = ( todosData ) => API.post( '/todos/create', todosData )

export const editTodos = ( todosData, todosId ) => API.put( `/todos/${ todosId }/edit`, todosData );

export const checkTodos = ( todosData, todosId ) => API.patch( `/todos/${ todosId }/edit`, todosData );

