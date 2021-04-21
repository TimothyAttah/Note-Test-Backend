import axios from 'axios';

const authUrl = 'http://localhost:8080/users';

export const signupUser = ( userData ) => axios.post( `${ authUrl }/signup`, userData );

export const signinUser = ( userData ) => axios.post( `${ authUrl }/signin`, userData );

export const getUsers = () => axios.get( `${ authUrl }` );
