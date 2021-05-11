import { TODOS_CHECK, TODOS_CREATE, TODOS_DELETE, TODOS_EDIT, TODOS_LISTS } from '../type';
import { v4 } from 'uuid';

const initialState = {
  todos: [
    {
      id: v4(),
      todo: 'Buy milk',
      isComplete: true,
      date: new Date()
    },
    {
      id: v4(),
      todo: 'Finish homework',
      isComplete: false,
      date: new Date()
    },
    {
      id: v4(),
      todo: 'Pray to God',
      isComplete: true
    },
    {
      id: v4(),
      todo: 'Submit assignment',
      isComplete: false,
      date: new Date()
    },
  ]
}

const todosReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case TODOS_LISTS:
      return {
        ...state,
        todos: state.todos
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
    case TODOS_CHECK:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload && todo.isComplete === true ? todo.isComplete = false : todo.isComplete = true )
      }
    default:
      return state;
  }
}

export default todosReducer;
