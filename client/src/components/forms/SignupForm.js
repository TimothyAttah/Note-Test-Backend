import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { signupUser } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const FormContainer = styled.form`
  margin: 20px 0;
  label {
    font-weight: bolder;
  }
  input {
  display: block;
  width: 95%;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #DEDFEC;
  margin-top: 5px;
  margin-bottom: 20px;
  background: rgba(196, 196, 196, 0.05);
  ::placeholder{
    color: #BDBEC1;
  }
  @media (max-width: 414px){
    width: 88%;
  }
 }
  button {
  width: 100%;
  padding: 10px;
  background-color: #356DFB;
  color: #fff;
    :hover {
    background-color: #073cc2;
  }
}
`;

const Signup = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password
    }
    dispatch( signupUser( newUser ) );
  }
  return (
    <>
      <FormContainer onSubmit={ handleSubmit }>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          name='firstName'
          value={ firstName }
          onChange={ ( e ) => setFirstName( e.target.value ) }
          placeholder='Enter your first name'
        />
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          name='lastName'
          value={ lastName }
          onChange={ ( e ) => setLastName( e.target.value ) }
          placeholder='Enter your last name'
        />
        <label htmlFor='email'>Email Address:</label>
        <input
          type='email'
          name='email'
          value={ email }
          onChange={ ( e ) => setEmail( e.target.value ) }
          placeholder='example@example.com'
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          value={ password }
          onChange={ ( e ) => setPassword( e.target.value ) }
          placeholder='Enter your password'
        />
        <Button type='submit' variant='contained'>Sign Up</Button>
      </FormContainer>
    </>
  );
};

export default Signup;
