import {
	UPLOAD_AVATAR,
	UPDATE_AVATAR,
	GET_USER_AVATARS,
	GET_ALL_AVATARS,
} from '../type';
import * as api from '../api/notesApi';
import { toast } from 'react-toastify';

export const user = JSON.parse(localStorage.getItem('user'));

export const uploadAvatar = avatarData => async dispatch => {
	try {
		const { data } = await api.uploadAvatar(avatarData);
		console.log(data);
		dispatch({
			type: UPLOAD_AVATAR,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const allUploadAvatars = () => async dispatch => {
	try {
		const { data } = await api.getAllUploadsAvatars();
		dispatch({
			type: GET_ALL_AVATARS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const updateAvatar = file => async dispatch => {
	await fetch(`/auth/users/update_image`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('jwt'),
		},
		body: JSON.stringify({ avatar: file }),
	})
		.then(res => res.json())
		.then(data => {
			localStorage.setItem(
				'user',
				JSON.stringify({ ...user, avatar: data.results.avatar })
			);
			dispatch({
				type: UPDATE_AVATAR,
				payload: data.results,
			});
			window.location.reload();
			toast.success(data.message);
		})
		.catch(err => {
			if (err.response && err.response.data) {
				return toast.error(err.response.data.error);
			}
		});
};
