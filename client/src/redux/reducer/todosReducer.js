import { TODOS_CHECK, TODOS_CREATE, TODOS_DELETE, TODOS_EDIT, TODOS_LISTS } from '../type';

const initialState = {
  todos: []
}

const todosReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case TODOS_LISTS:
      return {
        ...state,
        todos: action.payload
      };
    case TODOS_CREATE:
      return {
        ...state,
        todos: [ action.payload, ...state.todos ]
      };
    case TODOS_EDIT:
      return {
        ...state,
        todos: state.todos.map( todo => todo._id === action.payload._id ? action.payload : todo )
      };
    case TODOS_DELETE:
      return {
        todos: state.todos.filter( todo => todo._id !== action.payload )
      };
    case TODOS_CHECK:
      return {
        ...state,
        todos: state.todos.map( todo => todo._id === action.payload._id ? action.payload : todo )
      };
    default:
      return state;
  }
};

export default todosReducer;
