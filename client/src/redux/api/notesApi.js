import axios from 'axios';

const notesUrl = 'http://localhost:8080/notes'

export const notesCreate = ( notesData ) => axios.post( `${ notesUrl }/create`, notesData );