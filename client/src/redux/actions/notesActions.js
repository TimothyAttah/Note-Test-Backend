import { NOTES_CREATE, NOTES_DELETE, NOTES_EDIT, NOTES_LIKE, NOTES_UNLIKE, USERS_NOTES_LISTS, USER_NOTES_LISTS } from '../type';
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

export const notesDelete = ( noteId ) => async dispatch => {
 try {
   const { data } = await api.notesDelete( noteId );
   toast.success(data.message)
   dispatch( {
     type: NOTES_DELETE,
     payload: data.deletedNote
   } )
   history.push( '/api/users/notes' );
 } catch (err) {
  if ( err.response && err.response.data ) {
      toast.error(err.response.data.error)
    }
 }
};

export const notesEdit = ( id ) => {
  return {
    type: NOTES_EDIT,
    payload: id
  };
};

// export const likeNotes = ( id ) => async dispatch => {
//   try {
//     const { data } = await api.likeNotes( id );
//     console.log( data );
//     dispatch( {
//       type: NOTES_LIKE,
//       payload: data.result
//     })
//   } catch (error) {
//     console.log(error);
//   }
// }


export const likeNotes = (id) => dispatch => {
  fetch( '/notes/like', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    },
    body: JSON.stringify({noteId: id})
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data.message );
        dispatch( {
          type: NOTES_LIKE,
          payload: data.result
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
}

export const unlikeNotes = (id) => dispatch => {
  fetch( '/notes/unlike', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    },
    body: JSON.stringify({noteId: id})
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data.message );
        dispatch( {
          type: NOTES_UNLIKE,
          payload: data.result
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
}

export const notesComments = (id, text) => dispatch => {
  fetch( '/notes/comments', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    },
    body: JSON.stringify({noteId: id, text})
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data );
        dispatch( {
          type: NOTES_LIKE,
          payload: data.result
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
}

