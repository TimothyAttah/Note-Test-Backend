import { Divider } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import CommentRow from './CommentRow';
import {images} from '../Images'
import CommentsForm from '../forms/CommentsForm';

const Comments = styled.div`
padding-top: 50px;
.view {
  padding: 20px 0;
}
`;

const Comment = () => {
  return (
    <Comments>
      <Divider />
      <h3>Recent comments</h3>
      <CommentRow
        src={ images.Alex }
        name='Alex'
        date='1 day ago'
        comments='Contrary to popular belief, Lorem Ipsum is not simply random text.'
      />
      <CommentRow
        src={ images.Benita }
        name='Benita'
        date='5 hours ago'
        comments='Hello, how are you doing.'
      />
      <h4 className='view'>View more comments...</h4>
      <CommentsForm src={ images.Benita } />
    </Comments>
  )
}

export default Comment;
