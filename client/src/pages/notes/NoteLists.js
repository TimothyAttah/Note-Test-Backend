import React, { useEffect } from 'react';
import { Avatar, Button, Divider, IconButton } from '@material-ui/core';
import {  ThumbDown, ThumbUp, } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Comment from '../../components/comments/Comment';
import OpenComment from '../../components/comments/OpenComment';
import nameToInitials, {user} from '../../components/NameInitials';


import PopupNav from '../../components/navs/PopupNav';

import { listNotes, likeNotes, unlikeNotes } from '../../redux/actions/notesActions';
import {
  NoteComments, NoteCommentsLeft, Notes, NoteLeft, NoteCenter
} from './NoteListsStyles';

console.log(user);

const NoteLists = () => {
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch( listNotes() )
  }, [ dispatch ] )
  const notes = useSelector( state => state.notesReducer.notes )
  console.log( notes );

  const handleLikeNotes = (id) => {
    dispatch( likeNotes( id ) );
  }

  // const hasUserLiked = (note) => note && note.likes.includes( user._id )

  const handleUnlikeNotes = (id) => {
    dispatch( unlikeNotes( id ) );
  }

  return (
    <>
      {notes.length ? (
        notes.map( note => {
          const fullName = `${ note.postedBy.firstName } ${ note.postedBy.lastName }`
          return (
            <Notes key={ note._id }>
              <Notes primary>
                <NoteLeft>
                  <Link to={  note && note.postedBy._id !== user.results._id ? `/api/auth/users/${note.postedBy._id}/user/profile` : `/api/users/profile`}>
                  <Avatar>
                    { nameToInitials( fullName ) }
                    </Avatar>
                    </Link>
                  <NoteLeft primary>
                    <h4> <Link to={  note && note.postedBy._id !== user.results._id ? `/api/auth/users/${note.postedBy._id}/user/profile` : `/api/users/profile`}>{ fullName }</Link></h4>
                    <h5>24 followers</h5>
                  </NoteLeft>
                </NoteLeft>
                <NoteCenter>
                  <h2>{ note.title }</h2>
                  <small>24th feb 2021</small>
                  <p>{ note.content }</p>
                </NoteCenter>
                <div>
                  { note.postedBy ? (
                    <div>
                      { note && note.postedBy._id === user.results._id && <PopupNav note={ note } /> }
                    </div>
                  ) : ( <p>loading</p> ) }
                </div>
              </Notes>
              <Divider />
              <NoteComments>
                <NoteCommentsLeft>
                  <ThumbUp color='primary' />
                  <h4><span>{note.likes.length}</span> Likes</h4>
                </NoteCommentsLeft>
                <div>
                  <h4>{note.comments.length} Comments</h4>
                </div>
              </NoteComments>
              <Divider />
              <NoteComments primary>
                { note && note.likes.includes( user.results._id ) ? (
                   <IconButton style={ { position: 'absolute', left: '0' } }  onClick={ () => handleUnlikeNotes(note._id) } >
                      <ThumbDown /><span>Unlike</span>
                    </IconButton>
                ): (
                   <IconButton style={ { position: 'absolute', left: '0' } }  onClick={ () => handleLikeNotes(note._id) } >
                  <ThumbUp /><span>Like</span>
                </IconButton>
                )}
                <div>
                  <OpenComment myComment={ <Comment note={note} /> } />
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
