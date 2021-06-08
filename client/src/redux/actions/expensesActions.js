import { toast } from 'react-toastify';
import {
	CREATE_EXPENSES,
	DELETE_EXPENSES,
	EDIT_EXPENSES,
	LIST_EXPENSES,
} from '../type';
import * as api from '../api/notesApi';

export const createExpenses = expensesData => async dispatch => {
	try {
		const { data } = await api.createExpenses(expensesData);
		toast.success(data.message);
		dispatch({
			type: CREATE_EXPENSES,
			payload: data.newExpenses,
		});
	} catch (err) {
		if (err.response && err.response.data) {
			return toast.error(err.response.data.error);
		}
	}
};

export const listExpenses = () => async dispatch => {
	try {
		const { data } = await api.getExpenses();
		dispatch({
			type: LIST_EXPENSES,
			payload: data.expenses,
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteExpenses = expensesId => async dispatch => {
	try {
		toast.success('Expenses Deleted Successfully');
		await api.deleteExpenses(expensesId);
		dispatch({
			type: DELETE_EXPENSES,
			payload: expensesId,
		});
	} catch (error) {
		console.log(error);
	}
};
export const editExpenses = (expenses, id) => async dispatch => {
	try {
		toast.success('Expenses edited successfully!');
		dispatch({
			type: EDIT_EXPENSES,
			payload: expenses,
			id,
		});
	} catch (error) {
		console.log(error);
	}
};
