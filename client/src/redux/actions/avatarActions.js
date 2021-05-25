import { UPLOAD_AVATAR, UPDATE_AVATAR, GET_USER_AVATARS, GET_ALL_AVATARS } from '../type';
import * as api from '../api/notesApi';

export const user = JSON.parse( localStorage.getItem( 'user' ) );

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

export const updateAvatar = ( file ) => async dispatch => {
  const data = new FormData()
  data.append( 'file', file )
  data.append( 'upload_preset', 'note3sixty_v1' )
  data.append( 'cloud_name', 'timothycloud' )
  fetch( 'https://api.cloudinary.com/v1_1/timothycloud/image/upload', {
    method: 'POST',
    body: data
  } )
    // .then( res => res.json() )
  console.log( data );
  dispatch( {
    type: UPDATE_AVATAR,
    payload: data.url
  } )
    // .then( data => {
    //   setUrl( data.url )
    //   console.log( data );
    //   localStorage.setItem('user', JSON.stringify({...user, avatar: data.url  }))
    // } )
    .catch( error => {
      console.log( error );
    } )
};
