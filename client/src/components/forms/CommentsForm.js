import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { notesComments } from '../../redux/actions/notesActions';

const Form = styled.form`
  display: flex;
  width: 700px;
 .icon-image {
   padding: 0px 10px;
 }
  input {
    width: 100%;
    padding: 10px;
    outline: none;
    ::placeholder {
      color: grey;
    }
  }
  button{
    display: none;
  }
`

const CommentsForm = ( { src, note } ) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Form onSubmit={ ( e ) => {
        e.preventDefault();
        dispatch(notesComments(note._id, e.target[0].value))
      }}>
        <div className='icon-image'>{ src && <Avatar src={ src } /> }</div>
        <input
          placeholder='Write a comment...'
        />
        <button type='submit'></button>
      </Form>
    </div>
  )
}

export default CommentsForm;
