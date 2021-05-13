import { TODOS_CREATE, TODOS_DELETE, TODOS_EDIT, TODOS_LISTS, TODOS_CHECK } from '../type';
import { toast } from 'react-toastify';
import * as api from '../api/notesApi';
import history from '../../history';

export const todosLists = () => async dispatch => {
  try {
    const { data } = await api.listTodos();
    dispatch( {
      type: TODOS_LISTS,
      payload: data.todos
    } )
  } catch ( err ) {
    if ( err.response && err.response.data ) {
      return toast.error( err.response.data.error )
    }
  }
};

export const todosCreate = ( todosData ) => async dispatch => {
  try {
    const { data } = await api.addTodos( todosData );
  dispatch( {
    type: TODOS_CREATE,
    payload: data.todos
  })
  toast.success( data.message );
  } catch (err) {
    if ( err.response && err.response.data ) {
     return toast.error(err.response.data.error)
    }
  }
};

export const todosEdit = (  todosData, todosId ) => async dispatch => {
  try {
    const { data } = await api.editTodos( todosData, todosId )
     console.log( data );
    dispatch( {
      type: TODOS_EDIT,
      payload: data.updatedTodos
    } )
    toast.success( data.message );
    history.push('/api/users/todos')
  } catch (err) {
     if ( err.response && err.response.data ) {
     return toast.error(err.response.data.error)
    }
  }
};
// export const todosEdit = ( updatedTodo, id ) =>  {
//   return {
//     type: TODOS_EDIT,
//     payload:  updatedTodo, id
//   }
// };

export const todosCheck = ( id ) => {
  return {
    type: TODOS_CHECK,
    payload: id
  }
};

export const todosDelete = ( todosId ) => async dispatch => {
  try {
    const { data } = await api.deleteTodos( todosId )
    dispatch( {
      type: TODOS_DELETE,
      payload: todosId
    } )
    toast.success( data.message )
  } catch ( err ) {
    if ( err.response && err.response.data ) {
      return toast.error( err.response.data.error )
    }
  }
};
