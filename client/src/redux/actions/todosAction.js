import { TODOS_CREATE, TODOS_DELETE, TODOS_EDIT, TODOS_LISTS } from '../type';
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

export const todosEdit = ( id ) => {
  return {
    type: TODOS_EDIT,
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