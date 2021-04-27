import { GET_USER } from '../type';
import * as api from '../api/notesApi';

export const getUser = (id) => async dispatch => {
  try {
    const { data } = await api.getUser( id );
    console.log( data );
    dispatch( {
      type: GET_USER,
      payload: data
    })
  } catch (error) {
    
  }
}
