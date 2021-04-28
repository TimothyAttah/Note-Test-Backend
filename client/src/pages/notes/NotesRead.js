import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listNotes } from '../../redux/actions/notesActions';

const NotesRead = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listNotes() );
  }, [ dispatch ] )
  const {id} = useParams()
  const notes = useSelector( state => state.notesReducer.notes );

  console.log( id );
  console.log(notes);

  return (
    <div>
      <h1>Read Note</h1>
    </div>
  )
}

export default NotesRead;
