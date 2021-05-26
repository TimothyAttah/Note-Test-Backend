import { UPLOAD_AVATAR, GET_USER_AVATARS, GET_ALL_AVATARS , UPDATE_AVATAR} from '../type';

const avatarReducer = ( avatar = [], action ) => {
  switch ( action.type ) {
    case UPLOAD_AVATAR:
      return [ action.payload, ...avatar ]
    case GET_USER_AVATARS:
    case GET_ALL_AVATARS:
      return avatar
    case UPDATE_AVATAR:
      return action.payload.avatar
    default:
      return avatar;
  }
}

export default avatarReducer;