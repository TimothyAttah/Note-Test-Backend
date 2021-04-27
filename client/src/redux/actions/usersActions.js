import { FOLLOW_USER, GET_USER } from '../type';
import * as api from '../api/notesApi';

export const getUser = (id) => async dispatch => {
  try {
    const { data } = await api.getUser( id );
    dispatch( {
      type: GET_USER,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}


export const followUsers = (followId) => dispatch => {
  fetch( 'http://localhost:8080/auth/users/follow', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    },
    body: JSON.stringify({followId})
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data.message );
        dispatch( {
          type: FOLLOW_USER,
          payload: data.result
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
}