import { NOTES_CREATE, NOTES_DELETE, NOTES_EDIT, USERS_NOTES_LISTS, USER_NOTES_LISTS } from '../type';

const initialState = {
  notes: []
}

const notesReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case USERS_NOTES_LISTS:
    case USER_NOTES_LISTS:
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
        notes: state.notes.filter( note => note.id !== action.payload )
      }
    case NOTES_EDIT:
      return state.notes.map(note => note.id ? action.payload.id : note)
    default:
      return state
  }
}

export default notesReducer;
