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
    case UNFOLLOW_USER:
      return {
        ...state,
        user: action.payload,
        followers: state.followers.map(item => item._id ? action.payload._id : item),
        following: state.following.map(item => item._id ? action.payload._id : item),
      }
    default:
      return state
  }
}

export default usersReducer;
