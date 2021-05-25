import { UPLOAD_AVATAR, GET_USER_AVATARS, GET_ALL_AVATARS } from '../type';
import * as api from '../api/notesApi';

export const uploadAvatar = ( avatarData ) => async dispatch => {
  try {
    const { data } = await api.uploadAvatar( avatarData );
    console.log( data );
    dispatch( {
      type: UPLOAD_AVATAR,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const allUploadAvatars = (  ) => async dispatch => {
  try {
    const { data } = await api.getAllUploadsAvatars( );
    console.log( data );
    dispatch( {
      type: GET_ALL_AVATARS,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}