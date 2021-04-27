import { Divider } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import CommentRow from './CommentRow';
import {images} from '../Images'
import CommentsForm from '../forms/CommentsForm';
import { useDispatch, useSelector } from 'react-redux';


const Comments = styled.div`
padding-top: 50px;
.view {
  padding: 20px 0;
}
`;

const Comment = ( { note } ) => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notesReducer.notes)
  console.log(note);
  return (
    <Comments>
      <Divider />
      <h3>Recent comments</h3>
      {note? (
        
        note.comments.map( item => {
          console.log(item);
          return (
                   <CommentRow
              src={ images.Alex }
              key={item._id}
        name={item && item.postedBy && item.postedBy.firstName}
        date='1 day ago'
        comments={item && item.text}
      />
          )
        })
      ): (
        <h2>loading...</h2>
      )}
      {/* <CommentRow
        src={ images.Benita }
        name='Benita'
        date='5 hours ago'
        comments='Hello, how are you doing.'
      /> */}
      <h4 className='view'>View more comments...</h4>
      <CommentsForm src={ images.Benita } note={note} />
    </Comments>
  )
}

export default Comment;
