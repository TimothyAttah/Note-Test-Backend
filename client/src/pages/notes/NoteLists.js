import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { listNotes } from '../../redux/actions/notesActions';

const NoteLists = () => {
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(listNotes())
  }, [ dispatch ] )
  const notes = useSelector( state => state.notesReducer.notes )
  console.log(notes);
  return (
    <div>
      {notes.length ? (
        notes.map( note => {
          return (
            <div key={note.id}>
              <h2>{ note.title }</h2>
              <p>{ note.content }</p>
            </div>
          )
        })
      ): (
        <h2>Loading notes...</h2>
      )}
    </div>
  );
}

export default NoteLists;
