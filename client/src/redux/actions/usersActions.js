import { GET_USER } from '../type';
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
