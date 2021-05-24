import { UPLOAD_AVATAR, GET_USER_AVATARS } from '../type';

const uploadAvatar = ( avatar = [], action ) => {
  switch ( action.type ) {
    case UPLOAD_AVATAR:
      return [ action.payload, ...avatar ]
    case GET_USER_AVATARS:
      return avatar
    default:
      return avatar;
  }
}

export default uploadAvatar;