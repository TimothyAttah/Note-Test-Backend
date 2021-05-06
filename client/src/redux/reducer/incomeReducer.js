import { CREATE_INCOME, DELETE_INCOME, EDIT_INCOME, LIST_INCOMES } from '../type';

const initialState = {
  incomes: [
    // {id: v4(), item: 'Salary', value: 5000},
    // {id: v4(), item: 'Finished project', value: 2500},
    // {id: v4(), item: 'Sold books', value: 1500},
    // {id: v4(), item: 'made todos', value: 1000},
  ]
}

const incomesReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case LIST_INCOMES:
      return {
        ...state,
        incomes: action.payload
      }
    case CREATE_INCOME:
      return {
        ...state,
        incomes: [ action.payload, ...state.incomes ]
      };
    case DELETE_INCOME:
      return {
        ...state,
        incomes: state.incomes.filter( income => income._id !== action.payload )
      };
    case EDIT_INCOME:
      return {
        ...state,
        incomes: state.incomes.map(income => income.id === action.payload.id ? action.payload : income)
      }
    default:
      return state
  }
}

export default incomesReducer;

