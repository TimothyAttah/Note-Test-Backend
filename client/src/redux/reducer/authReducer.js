import { SIGNIN_USER, SIGNUP_USER, GET_USERS, LOGOUT_USER } from '../type';

const auth = (auth = [], action) => {
	switch (action.type) {
		case SIGNUP_USER:
		case SIGNIN_USER:
			return [action.payload, ...auth];
		case GET_USERS:
		case LOGOUT_USER:
			return action.payload;
		default:
			return auth;
	}
};

export default auth;
