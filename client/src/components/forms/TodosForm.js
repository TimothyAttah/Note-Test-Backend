import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { todosCreate, todosEdit } from '../../redux/actions/todosAction';
import { useParams } from 'react-router';


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
  const { todosId } = useParams();
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
      console.log( updatedTodo );
      dispatch( todosEdit( updatedTodo, todosId ) );
      // setName( todos.name = null )
    } else {
      dispatch( todosCreate( newTodos ) );
    }
    setName('');
  }
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <input
          type='text'
          value={ name }
          name='name'
          onChange={(e)=> setName(e.target.value)}
        />
        <button type='submit'>Create</button>
      </FormContainer>
    </div>
  )
}

export default TodosForm;
