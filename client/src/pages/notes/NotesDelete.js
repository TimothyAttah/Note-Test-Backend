import React from 'react';
import { IconButton, Button, Divider } from '@material-ui/core';
import styled, {css} from 'styled-components';
import {Delete, Close, Check} from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom'
import Modal from '../../Components/modal/Modal';
import Backdrop from '../../Components/Backdrop';
import { notesDelete } from '../../redux/actions/notesActions';
import { green} from '@material-ui/core/colors';
import history from '../../history';
import Notes from './Notes';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${props => props.primary && css`
    justify-content: flex-start;
  `}
`

const Content = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  span {
    font-weight: bolder;
    font-style: italic;
  }
  @media (max-width: 414px){
    font-size: 18px;
  }
  @media (max-width: 375px){
    font-size: 15px;
  }
  @media (max-width: 280px){
    font-size: 12px;
  }
`

const ButtonContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
  padding-bottom: 10px;
  button {
    margin-left: 15px;
  }
`;

const NotesDelete = () => {
  const { noteId } = useParams()
  const dispatch = useDispatch()
  console.log(noteId);
  const notes = useSelector( state => noteId !== null ? state.notesReducer.notes.find( note => note.id === noteId ) : null )
  
  const handleDelete = (note) => {
    dispatch( notesDelete( note ) )
    history.push('/api/users/notes')
  }
  return (
    <>
      
      <Backdrop onClick={ () => history.push( '/api/users/notes' ) } />
      <Notes />
      <Modal >
        <Header>
          <Header primary>
        <span><Delete /></span>
          <p>Delete Old Notes</p>
          </Header>
          <div><IconButton aria-label="close"  onClick={() => history.push('/api/users/notes')}><Close /></IconButton></div>
        </Header>
        <Divider />
        <Content>
          { notes ? (
            <p>Are you sure you want to delete this note? <br /> <span>{notes.title }</span></p>
          ):
            ( <h3>Please select a note to delete ?</h3>)}
          
        </Content>
        <Divider />
        {notes ? ( <ButtonContainer>
          <Button
            variant='contained'
            size='small'
            color='secondary'
            startIcon={ <Close /> }
            onClick={() => history.push('/api/users/notes')}
          >
            No
            </Button>
          <Button
            variant='contained'
            size='small'
            style={ { backgroundColor: green[ 800 ], color: '#fff' } }
            startIcon={ <Check /> }
            onClick={() => handleDelete(notes.id) }
          >
            Yes
          </Button>
        </ButtonContainer>) : ''}   
      </Modal>
    </>
  );
}

export default NotesDelete;
