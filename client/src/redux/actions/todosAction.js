import { TODOS_CREATE, TODOS_DELETE, TODOS_EDIT, TODOS_LISTS, TODOS_CHECK } from '../type';
import { toast } from 'react-toastify';

export const todosLists = () => {
  return {
    type: TODOS_LISTS
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
