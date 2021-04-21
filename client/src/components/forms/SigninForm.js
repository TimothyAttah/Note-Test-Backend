import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { userSignin } from '../../redux/actions/authActions';

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

const Signin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const savedUser = {
      email,
      password
    }
    // dispatch( userSignin( savedUser ) );
    console.log(savedUser);
  }
  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor='email'>Email Address:</label>
        <input
          type='email'
          name='email'
          placeholder='example@example.com'
          value={ email }
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          value={ password }
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit' variant='contained'>Sign In</Button>
      </FormContainer>
    </>
  );
};

export default Signin;
