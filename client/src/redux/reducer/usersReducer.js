import { FOLLOW_USER, GET_USER, UNFOLLOW_USER } from '../type';

const initialState = {
  user: [],
  followers: [],
  following: []
}

const usersReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      }
    case FOLLOW_USER:
      return {
        ...state,
        followers: [action.payload.followers, ...state.user],
        following: [action.payload.following, ...state.user] 
      }
    case UNFOLLOW_USER:
      return {
        ...state,
        user: action.payload,
        followers: state.followers.filter(item => item !== action.payload),
        following: state.following.filter(item => item !== action.payload),
      }
    default:
      return state
  }
}

export default usersReducer;
