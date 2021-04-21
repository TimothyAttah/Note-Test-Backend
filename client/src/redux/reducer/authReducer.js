import {
  SIGNIN_USER, SIGNUP_USER, GET_USERS
} from '../type';

const auth = ( auth = [], action ) => {
  switch ( action.type ) {
    case SIGNUP_USER:
    case SIGNIN_USER:
      return [ action.payload, ...auth ];
    case GET_USERS:
      return action.payload;
    default:
      return auth
  }
}

export default auth;
