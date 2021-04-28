import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listNotes } from '../../redux/actions/notesActions';
import styled from 'styled-components';



const NotesRead = () => {
  const dispatch = useDispatch();
  const {noteId} = useParams()
  useEffect( () => {
    dispatch( listNotes() );
  }, [ dispatch, noteId ] )
  const note = useSelector( state => noteId && state.notesReducer.notes.find(note => note._id === noteId ) );

  console.log( noteId );
  console.log(note);

  return (
    <div>
      <h1>Read Note</h1>
      {note ? (
        <div>
          <h2>{ note.title }</h2>
          <p>{ note.content }</p>
        </div>
      ): (
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default NotesRead;
