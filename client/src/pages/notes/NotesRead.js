import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listNotes } from '../../redux/actions/notesActions';
import styled, { css } from 'styled-components';
import { Avatar, Button, Divider} from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';
import { user } from '../../components/NameInitials';

const Note = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px){
    display: block;
  }
`;

const NoteLeft = styled.div`
  ${props => props.primary && css`
  border: 2px solid black;
    display: block; 
    padding: 10px 20px;
  .MuiAvatar-root {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 600px){
    padding-left: 100px;
    border: none;
  }
  @media (max-width: 375px){
    padding-left: 50px;
  }
  `}
  ${props => props.secondary && css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
        width: 240px;
     h4 {
          padding-left: 5px;
          color: gray;
        }
    div {
       display: flex;
        align-items: center;
    }
    @media (max-width: 600px){
    padding-left: 100px;
    width: 340px;
  }
  @media (max-width: 375px){
    padding-left: 50px;
    
  }
  @media (max-width: 375px){
    padding-left: 50px;

  }
  @media (max-width: 320px){
   
    width: 300px;
  }
  @media (max-width: 280px){
   
    width: 260px;
    font-size: 12px;
  }
  `}
  ${props => props.button && css`
    padding-bottom: 30px;
    @media (max-width: 600px){
    padding-left: 100px;
    padding-bottom: 80px;
  }
  @media (max-width: 375px){
    padding-left: 50px;
  }
  `}
  @media (max-width: 600px){
   h1 {
     padding-left: 100px;
   }
   @media (max-width: 375px){
    h1 {
      padding-left: 50px;
    }
  }
  }
`;

const NoteRight = styled.div`
  width: 70%;
  border: 2px solid #ddd;
  h2 {
    padding-top: 50px;
    padding-left: 20px;
    
  }
  p {
    width: 100%;
    padding: 20px 50px 20px 20px;
    line-height: 25px;
  }
  @media (max-width: 900px){
    width: 55%;
  }
  @media (max-width: 600px){
    width: 100%;
    h2 {
      padding-top: 10px;
    }
  }
`;



const NotesRead = () => {
  const dispatch = useDispatch();
  const {noteId} = useParams()
  useEffect( () => {
    dispatch( listNotes() );
  }, [ dispatch, noteId ] )
  const note = useSelector( state => noteId && state.notesReducer.notes.find(note => note._id === noteId ) );
 
  console.log(note);

  return (
    <div>
      {note ? (
        <Note>
          <NoteLeft>
            <h1>Posted By:</h1>
            <NoteLeft primary>
              <div> <Avatar></Avatar></div>
              <div>
                <h2> { `${ note.postedBy.firstName } ${ note.postedBy.lastName }` }</h2>
                <h4> { note.postedBy.email }</h4>
                <small>10 days ago</small>
             </div>
            </NoteLeft>
            <Divider />
            <NoteLeft secondary>
              <div>{note.postedBy.followers.length } <h4>Followers</h4></div>
              <div>{note.postedBy.following.length } <h4>Following</h4></div>
              <div>{note.likes.length} <h4><ThumbUp /></h4></div>
            </NoteLeft>
            <NoteLeft button>
              <Link to={ note && note.postedBy._id !== user.results._id ? `/api/auth/users/${ note.postedBy._id }/user/profile` : `/api/users/profile` }>
                <Button variant='contained'>More from ...</Button>
              </Link>
            </NoteLeft>
          </NoteLeft>
          <NoteRight>
            <h2>{ note.title }</h2>
            <Divider />
          <p>{ note.content }</p>
         </NoteRight>
        </Note>
      ): (
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default NotesRead;
