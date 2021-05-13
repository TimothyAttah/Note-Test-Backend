import { TODOS_CHECK, TODOS_CREATE, TODOS_DELETE, TODOS_EDIT, TODOS_LISTS } from '../type';

const initialState = {
  todos: [
    // {
    //   id: v4(),
    //   todo: 'Buy milk',
    //   isComplete: true,
    //   date: new Date()
    // },
    // {
    //   id: v4(),
    //   todo: 'Finish homework',
    //   isComplete: false,
    //   date: new Date()
    // },
    // {
    //   id: v4(),
    //   todo: 'Pray to God',
    //   isComplete: false
    // },
    // {
    //   id: v4(),
    //   todo: 'Submit assignment',
    //   isComplete: false,
    //   date: new Date()
    // },
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
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.map( todo => todo.id === action.payload.id ? action.payload : todo )
      };
    case TODOS_DELETE:
      return {
        todos: state.todos.filter( todo => todo.id !== action.payload )
      };
    case TODOS_CHECK:
      return {
        ...state,
        // todos: state.todos.map( item => action.payload === item.id && item.isComplete === true ? item.isComplete = false : item.isComplete = true )
        //  todos: state.todos.map( todo => !todo.isComplete === action.payload ? todo :  todo.isComplete  )
       todos: state.todos.map( todo => todo.id === action.payload.id ? action.payload : todo )
      }
    default:
      return state;
  }
}

export default todosReducer;
