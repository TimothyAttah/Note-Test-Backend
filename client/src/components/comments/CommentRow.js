import React from 'react'
import { Avatar } from '@material-ui/core';
import { Delete, ThumbUp } from '@material-ui/icons';
import styled, { css } from 'styled-components';

const Comments = styled.div`
  display: flex;
   width: 700px;
   padding: 10px;
`

const CommentsLeft = styled.div`
  padding-right: 10px;
`
const CommentsTop = styled.div`
  width: 600px;
  ${props => props.primary && css`
   border: 1px solid #bdbdbd;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
   border-radius: 5px;
   padding: 0 10px;
   h4 {
     padding-bottom: 3px;
   }
   :hover {
     .delete-icon {
       display: block;
       cursor: pointer;
     }
   }
   .delete-icon {
     display: none;
   }
  `}
`
const CommentsBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${props => props.primary && css`
  width: 150px;
  `}
  ${props => props.secondary && css`
       display: flex;
  align-items: center;
  `}
`

const CommentRow = ({src, name, date, comments}) => {
  return (
    <div>
    <Comments>
      <CommentsLeft>{src && <Avatar src={ src } /> }</CommentsLeft>
      <CommentsTop>
        <CommentsTop primary>
          <div>
          <h4>{ name }</h4>
          <p>{ comments }</p>
          </div>
          <div className='delete-icon'>
           <Delete color='secondary' titleAccess='Delete' />
         </div>
          </CommentsTop>
        <CommentsBottom>
          <CommentsBottom primary>
             <h5>like .</h5>
          <h5>Reply .</h5>
          <small>{ date }</small>
         </CommentsBottom>
          <CommentsBottom secondary>
            <ThumbUp color='primary' />
            <small><span>12</span> Likes</small>
          </CommentsBottom>
        </CommentsBottom>
      </CommentsTop>
      </Comments>
    </div>
  );
}

export default CommentRow;
