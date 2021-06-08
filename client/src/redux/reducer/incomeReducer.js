import {
	CREATE_INCOME,
	DELETE_INCOME,
	EDIT_INCOME,
	LIST_INCOMES,
} from '../type';

const initialState = {
	incomes: [],
};

const incomesReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST_INCOMES:
			return {
				...state,
				incomes: action.payload,
			};
		case CREATE_INCOME:
			return {
				...state,
				incomes: [action.payload, ...state.incomes],
			};
		case DELETE_INCOME:
			return {
				...state,
				incomes: state.incomes.filter(income => income._id !== action.payload),
			};
		case EDIT_INCOME:
			return {
				...state,
				incomes: state.incomes.map(income =>
					income.id === action.payload.id ? action.payload : income
				),
			};
		default:
			return state;
	}
};

export default incomesReducer;
