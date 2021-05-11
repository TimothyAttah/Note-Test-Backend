import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { todosLists, todosDelete } from '../../redux/actions/todosAction';
import { IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import TodoItem from './TodoItem';


const TodosContainer = styled.div`
   h2 {
  font-size: 2em;
  text-align: center;
  color: teal;
  margin-top: 50px;
  margin-bottom: 20px;
  text-transform: capitalize;
   }
`

const TodosLists = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( todosLists() );
  }, [ dispatch ] );
  const {todos} = useSelector( state => state.todosReducer )
  
  const handleDelete = ( id ) => {
    dispatch( todosDelete( id ) );
  }
  return (
    <TodosContainer>
      {todos.length ? (
        todos.map( item => {
          return (
            <TodoItem
              todo={ item.todo }
              key={item.id}
            />
          )
        } )
      ) : (
        <h2>You have nothing to do</h2>
      ) }
      <h2>You have { todos.length } things to do</h2>
    </TodosContainer>
  );
}

export default TodosLists;
