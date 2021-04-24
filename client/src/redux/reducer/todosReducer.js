import { TODOS_CREATE, TODOS_DELETE, TODOS_EDIT, TODOS_LISTS } from '../type';
import { v4 } from 'uuid';

const initialState = {
  todos: [
    {
      id: v4(),
      content: 'Buy milk'
    },
    {
      id: v4(),
      content: 'Finish homework'
    },
    {
      id: v4(),
      content: 'Pray to God'
    },
    {
      id: v4(),
      content: 'Submit assignment'
    },
  ]
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
        todos: state.todos.map( todo => todo.id ? action.payload.id : todo )
      };
    case TODOS_DELETE:
      return {
        todos: state.todos.filter( todo => todo.id !== action.payload )
      };
    default:
      return state;
  }
}

export default todosReducer;
