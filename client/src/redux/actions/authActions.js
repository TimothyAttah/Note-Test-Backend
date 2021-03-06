import { SIGNIN_USER, SIGNUP_USER, GET_USERS, LOGOUT_USER } from '../type';

import * as api from '../api/notesApi';
import { toast } from 'react-toastify';
import history from '../../history';

export const signupUser = userData => async dispatch => {
	try {
		const { data } = await api.signupUser(userData);
		toast.success(data.message);
		dispatch({
			type: SIGNUP_USER,
			payload: data.users,
		});
		history.push('/api/users/signin');
	} catch (err) {
		if (err.response && err.response.data) {
			toast.error(err.response.data.error);
		}
	}
};

export const signinUser = userData => async dispatch => {
	try {
		const { data } = await api.signinUser(userData);
		toast.success(data.message);
		dispatch({
			type: SIGNIN_USER,
			payload: data.users,
		});
		localStorage.setItem('jwt', data.token);
		localStorage.setItem('user', JSON.stringify(data));
		history.push('/api/users/notes');
		window.location.reload(false);
	} catch (err) {
		if (err.response && err.response.data) {
			toast.error(err.response.data.error);
		}
	}
};

export const getUsers = () => async dispatch => {
	try {
		const { data } = await api.getUsers();
		dispatch({
			type: GET_USERS,
			payload: data.savedUsers,
		});
	} catch (err) {
		if (err.response && err.response.data) {
			toast.error(err.response.data.error);
		}
	}
};

export const logout = () => {
	return {
		type: LOGOUT_USER,
		payload: null,
	};
};
