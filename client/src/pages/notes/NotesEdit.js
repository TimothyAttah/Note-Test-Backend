import { Divider, IconButton } from '@material-ui/core';
import React from 'react';
import Backdrop from '../../components/Backdrop';
import Modal from '../../components/modal/Modal'
import styled from 'styled-components';
import { Close} from '@material-ui/icons';
import NotesCreateForm from '../../components/forms/NotesCreateForm';
import history from '../../history';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bolder;
`

const NotesEdit = () => {
  return (
    <div>
      <Backdrop onClick={()=> history.push('/api/users/notes')} />
      <Modal>
        <Header>
          <p>Edit a note</p>
          <IconButton onClick={()=> history.push('/api/users/notes')}><Close /></IconButton>
        </Header>
        <Divider />
       <NotesCreateForm />
      </Modal>
    </div>
  );
}

export default NotesEdit;
