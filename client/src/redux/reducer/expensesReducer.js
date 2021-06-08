import {
	CREATE_EXPENSES,
	DELETE_EXPENSES,
	EDIT_EXPENSES,
	LIST_EXPENSES,
} from '../type';

const initialState = {
	expenses: [],
};

const ExpensesReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST_EXPENSES:
			return {
				...state,
				expenses: action.payload,
			};
		case CREATE_EXPENSES:
			return {
				...state,
				expenses: [action.payload, ...state.expenses],
			};
		case DELETE_EXPENSES:
			return {
				...state,
				expenses: state.expenses.filter(
					expense => expense._id !== action.payload
				),
			};
		case EDIT_EXPENSES:
			return {
				...state,
				expenses: state.expenses.map(expense =>
					expense.id === action.payload.id ? action.payload : expense
				),
			};
		default:
			return state;
	}
};

export default ExpensesReducer;
