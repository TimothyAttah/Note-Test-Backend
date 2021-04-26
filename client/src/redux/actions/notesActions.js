import { NOTES_CREATE, NOTES_DELETE, NOTES_EDIT, NOTES_LIKE, USERS_NOTES_LISTS, USER_NOTES_LISTS } from '../type';
import * as api from '../api/notesApi';
import { toast } from 'react-toastify';
import history from '../../history';



export const listNotes = () => async dispatch => {
 try {
   const { data } = await api.allNotes()
   dispatch( {
     type: USERS_NOTES_LISTS,
     payload: data
   })
 } catch (error) {
   
 }
};

export const myNotes = () => async dispatch => {
  try {
    const { data } = await api.myNotes();
    console.log( data );
    dispatch( {
      type: USER_NOTES_LISTS,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const notesCreate = ( notesData ) => async dispatch => {
  try {
    const {data} = await api.notesCreate(notesData)
    toast.success( data.message )
    dispatch( {
      type: NOTES_CREATE,
      payload: data.note
    } )
    history.push('/api/users/notes')
  } catch (err) {
    if ( err.response && err.response.data ) {
      toast.error(err.response.data.error)
    }
  }
};

export const notesDelete = ( id ) => {
  return {
    type: NOTES_DELETE,
    payload: id
  };
};

export const notesEdit = ( id ) => {
  return {
    type: NOTES_EDIT,
    payload: id
  };
};

export const likeNotes = ( noteId ) => async dispatch => {
  try {
    const { data } = await api.likeNotes( noteId );
    console.log( data );
    dispatch( {
      type: NOTES_LIKE,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}
