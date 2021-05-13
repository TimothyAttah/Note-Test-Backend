import { TODOS_CREATE, TODOS_DELETE, TODOS_EDIT, TODOS_LISTS, TODOS_CHECK } from '../type';
import { toast } from 'react-toastify';
import * as api from '../api/notesApi';

export const todosLists = () => async dispatch => {
 try {
   const { data } = await api.listTodos();
   console.log( data );
   dispatch( {
     type: TODOS_LISTS,
     payload: data.todos
   })
 } catch (error) {
   
 }
};

export const todosCreate = ( todos ) => {
  toast.success( 'You created a todo' );
  return {
    type: TODOS_CREATE,
    payload: todos
  }
};

export const todosEdit = (  updatedTodo , id) => {
  return {
    type: TODOS_EDIT,
    payload:  updatedTodo, id
  }
};

export const todosCheck = ( id ) => {
  return {
    type: TODOS_CHECK,
    payload: id
  }
};

export const todosDelete = ( id ) => {
   toast.success('Todos delete successfully')
  return {
    type: TODOS_DELETE,
    payload: id
  }
};
