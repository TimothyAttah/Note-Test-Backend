import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import Backdrop from '../../Components/Backdrop';
import Modal from '../../Components/modal/Modal';
import SignupForm from '../../Components/forms/SignupForm';
import { Link } from 'react-router-dom';
import { images } from '../../Components/Images';
import {
  CloseButton,
  Title,
  Subtitle,
  Description,
  ButtonWrapper,
  Divider
} from './SigninSignupStyles';
import history from '../../history';


const Signup = () => {
  return (
    <>
      <Backdrop onClick={()=> history.push('/')} />
      <Modal>
        <CloseButton><IconButton  onClick={()=> history.push('/')}><Close /></IconButton></CloseButton>
        <Title>Note3Sixty</Title>
        <Subtitle>Create your account</Subtitle>
        <Description>Enter your personal details to start your journey today</Description>
        <ButtonWrapper>
          <Link to='/user/api/google'>
            <Button variant='contained' color='inherit'>
              <img src={ images.googleIcon } alt='' width='30px' />
              <span>Log in with Google</span>
            </Button>
          </Link>
        </ButtonWrapper>
        <Divider>
          <img src={ images.lineIcon } alt='' />
          <span>or</span>
          <img src={ images.lineIcon } alt='' />
        </Divider>
        <SignupForm />
        <Description primary>Already have an account? <Link to='/api/user/signin'>Signin here</Link></Description>
      </Modal>
    </>
  );
};

export default Signup;
