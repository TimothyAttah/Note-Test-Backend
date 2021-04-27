import axios from 'axios';


const API = axios.create( { baseURL: 'http://localhost:8080' } )

API.interceptors.request.use( ( req ) => {
  if ( localStorage.getItem( 'jwt' ) ) {
    req.headers[ 'Authorization' ] = `Bearer ${ localStorage.getItem( 'jwt' ) }`
  }
  

  return req;
})

export const notesCreate = ( notesData ) => API.post( '/notes/create', notesData )

export const allNotes = () => API.get( '/notes' );

export const myNotes = () => API.get( '/notes/user/note' );

export const likeNotes = ( id ) => API.put( '/notes/like', id );

export const notesDelete = ( noteId ) => API.delete( `/notes/${ noteId }/delete` );

export const getUser = ( id ) => API.get( `/auth/users/${ id }/user` );
