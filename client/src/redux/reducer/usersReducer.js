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
        followers: [...state.followers, action.payload.followers],
        following: [...state.following, action.payload.following],
      }
    default:
      return state
  }
}

export default usersReducer;
