import { Divider } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import CommentRow from './CommentRow';
import {images} from '../Images'

const Comments = styled.div`

border: 2px solid green;
padding-top: 50px;
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
       <h4>View more comments...</h4>
    </Comments>
  )
}

export default Comment;
