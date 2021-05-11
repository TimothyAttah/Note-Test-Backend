import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { todosCreate } from '../../redux/actions/todosAction';
import { v4 } from 'uuid';


const FormContainer = styled.form`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  input, button {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 5px;
  padding: 0 5px;
  box-shadow: inset -5px -5px 5px #fff7,
              inset 5px 5px 5px #0002;
  }

  button {
  width: 80px;
  margin-left: 15px;
  letter-spacing: 2px;
  cursor: pointer;
  box-shadow:  -5px -5px 5px #fff7,
               5px 5px 5px #0002;
  }
`

const TodosForm = () => {
  const dispatch = useDispatch();
  const [ todo, setTodo ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = {
      id: v4(),
      todo,
      isComplete: false,
      date: new Date()
    }
    console.log(newTodos);
    dispatch( todosCreate( newTodos ) );
    setTodo( '' );
  }
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <input
          type='text'
          value={ todo }
          name='todo'
          onChange={(e)=> setTodo(e.target.value)}
        />
        <button type='submit'>Create</button>
      </FormContainer>
    </div>
  )
}

export default TodosForm;
