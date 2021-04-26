import axios from 'axios';


const API = axios.create( { baseURL: 'http://localhost:8080' } )

API.interceptors.request.use( ( req ) => {
  if ( localStorage.getItem( 'jwt' ) ) {
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`
  }

  return req;
})

export const notesCreate = ( notesData ) => API.post( '/notes/create', notesData )

export const allNotes = () => API.get( '/notes' );

export const myNotes = () => API.get( '/notes/user/note' );
