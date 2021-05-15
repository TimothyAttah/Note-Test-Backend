import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { todosCreate, todosEdit } from '../../redux/actions/todosAction';
import { useParams } from 'react-router';


const FormContainer = styled.form`
  height: 50px;
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

  input {
    padding: 15px;
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
  let { todosId } = useParams();
  const [ name, setName ] = useState( '' );
  let todos = useSelector( state => todosId !== null ? state.todosReducer.todos.find( item => item._id === todosId ) : null )
  useEffect( () => {
    if ( todos ) setName( todos.name );
  }, [ todosId, todos ] )


  const handleSubmit = ( e ) => {
    e.preventDefault();
    const newTodos = {
      name,
      isComplete: false,
    }
 
    if ( todosId && todos !== undefined ) {
      const updatedTodo = {
      name,
      isComplete: todos.isComplete,
      date: todos.date,
      id: todos._id
      }
      dispatch( todosEdit( updatedTodo, todosId ) );
      clear()
    } else {
      dispatch( todosCreate( newTodos ) );
    }
    setName( '' );
    clear()
  }

  const clear = () => {
    setName( '' );
    todosId = null
  }
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <input
          type='text'
          value={ name }
          onChange={(e)=> setName(e.target.value)}
        />
        <button type='submit'>{ todosId ? 'Edit' : 'Create' }</button>
      </FormContainer>
    </div>
  )
}

export default TodosForm;
