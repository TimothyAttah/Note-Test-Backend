import React, { useEffect, Fragment } from 'react';
import { Avatar, Button, Divider, IconButton } from '@material-ui/core';
import {  ThumbDown, ThumbUp, } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Comment from '../../components/comments/Comment';
import OpenComment from '../../components/comments/OpenComment';
import ReadMore from '../../components/ReadMore'
import {user} from '../../components/NamesInitials'


import PopupNav from '../../components/navs/PopupNav';

import { listNotes, likeNotes, unlikeNotes } from '../../redux/actions/notesActions';
import {
  NoteComments, NoteCommentsLeft, Notes, NoteLeft, NoteCenter
} from './NoteListsStyles';
import moment from 'moment';

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

  const handleUnlikeNotes = (id) => {
    dispatch( unlikeNotes( id ) );
  }

  return (
    <Fragment>
      {notes.length ? (
        notes.map( note => {
          const fullName = `${ note.postedBy.firstName } ${ note.postedBy.lastName }`
          return (
            <div key={ note._id } style={{ paddingBottom: '30px'}}>
              <Notes >
              <Notes primary>
                <NoteLeft>
                    <Link to={ note && note.postedBy._id !== user.results._id ? `/api/auth/users/${ note.postedBy._id }/user/profile` : `/api/users/profile` }>
                   <Avatar> <img src={note.postedBy.avatar} alt=''/></Avatar>
                    </Link>
                  <NoteLeft primary>
                      <h4>
                        <Link to={ note && note.postedBy._id !== user.results._id ? `/api/auth/users/${ note.postedBy._id }/user/profile` : `/api/users/profile` }>
                          { fullName }
                        </Link>
                      </h4>
                    <h5>{note.postedBy.followers.length} Followers</h5>
                  </NoteLeft>
                </NoteLeft>
                <NoteCenter>
                  <h2>{ note.title }</h2>
                  <small>{moment(note.createdAt).format('llll')}</small>
                    <ReadMore>
                       { note.content }
                 </ReadMore>
                </NoteCenter>
                <Fragment>
                  { note.postedBy ? (
                    <div>
                      { note && note.postedBy._id === user.results._id && <PopupNav note={ note } /> }
                    </div>
                  ) : ( <p>loading</p> ) }
                </Fragment>
              </Notes>
              <Divider />
              <NoteComments>
                <NoteCommentsLeft>
                  <ThumbUp color='primary' />
                  <h4><span>{note.likes.length}</span> Likes</h4>
                </NoteCommentsLeft>
                <Fragment>
                  <h4>{note.comments.length} Comments</h4>
                </Fragment>
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
                <Fragment>
                  <OpenComment myComment={ <Comment note={note} /> } />
                </Fragment>
                <Button variant='contained' size='small'><Link to={`/api/users/notes/${note._id}/note/read`}>Read More</Link></Button>
              </NoteComments>
            </Notes>
            </div>
          );
        } )
      ) : (
        <h2>Loading notes...</h2>
      ) }
    </Fragment>
  );
};

export default NoteLists;
