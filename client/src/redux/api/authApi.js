import axios from 'axios';

const authUrl = '/api/users';

export const signupUser = ( userData ) => axios.post( `${ authUrl }/signup`, userData );

export const signinUser = ( userData ) => axios.post( `${ authUrl }/signin`, userData );