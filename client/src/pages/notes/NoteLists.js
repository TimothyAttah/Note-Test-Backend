import { Avatar, Button, Divider, IconButton } from '@material-ui/core';
import {  Favorite, Person, ThumbUp, } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Comment from '../../components/comments/Comment';
import OpenComment from '../../components/comments/OpenComment';
import PopupNav from '../../components/navs/PopupNav';

import { listNotes } from '../../redux/actions/notesActions';
import {
  NoteComments, NoteCommentsLeft, Notes, NoteLeft, NoteCenter
} from './NoteListsStyles';


const NoteLists = () => {
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch( listNotes() )
  }, [ dispatch ] )
  const notes = useSelector( state => state.notesReducer.notes )
  console.log( notes );

  
  return (
    <>
      {notes.length ? (
        notes.map( note => {
          return (
            <Notes key={ note.id }>
              <Notes primary>
                <NoteLeft>
                  <Avatar>
                    <Person />
                  </Avatar>
                  <NoteLeft primary>
                    <h4>Jane Doe</h4>
                    <h5>24 followers</h5>
                  </NoteLeft>
                </NoteLeft>
                <NoteCenter>
                  <h2>{ note.title }</h2>
                  <small>24th feb 2021</small>
                  <p>{ note.content }</p>
                </NoteCenter>
                <div>
                  <PopupNav note={note} />
                </div>
              </Notes>
              <Divider />
              <NoteComments>
                <NoteCommentsLeft>
                  <ThumbUp color='primary' />
                  <Favorite color='secondary' />
                  <h4><span>200</span> Likes</h4>
                </NoteCommentsLeft>
                <div>
                  <h4>152 Comments</h4>
                </div>
              </NoteComments>
              <Divider />
              <NoteComments primary>
                <IconButton style={{position: 'absolute', left: '0'}}><ThumbUp /><span>Like</span></IconButton>
                <div>
                  <OpenComment myComment={ <Comment /> } />
                </div>
                <Button variant='contained' size='small'><Link to='#'>Read More</Link></Button>
              </NoteComments>
            </Notes>
          );
        } )
      ) : (
        <h2>Loading notes...</h2>
      ) }
    </>
  );
};

export default NoteLists;
