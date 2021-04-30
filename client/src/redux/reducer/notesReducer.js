import { FRIENDS_NOTES, NOTES_COMMENTS, NOTES_CREATE, NOTES_DELETE, NOTES_EDIT, NOTES_LIKE, NOTES_UNLIKE, USERS_NOTES_LISTS, USER_NOTES_LISTS } from '../type';

const initialState = {
  notes: []
}

const notesReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case USERS_NOTES_LISTS:
    case USER_NOTES_LISTS:
    case FRIENDS_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    case NOTES_CREATE:
      return {
        ...state,
        notes: [ action.payload, ...state.notes ]
      }
    case NOTES_DELETE:
      return {
        ...state,
        notes: state.notes.filter( note => note._id !== action.payload )
      }
    case NOTES_EDIT:
      return {
        ...state,
        notes: state.notes.map( note => note._id === action.payload._id ? action.payload : note )
      }
    case NOTES_LIKE:
    case NOTES_UNLIKE:
    case NOTES_COMMENTS:
      return {
        ...state,
        notes: state.notes.map( note => note._id === action.payload._id ? action.payload : note )
      };
    default:
      return state
  }
}

export default notesReducer;
