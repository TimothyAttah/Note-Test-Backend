import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { todosLists, todosDelete } from '../../redux/actions/todosAction';
import { IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';


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

const Todos = styled.ul`
  margin: 0;
  padding: 0;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  margin: 15px 0;
  padding: 10px;
  text-transform: capitalize;
   box-shadow:  -5px -5px 5px #fff7,
              5px 5px 5px #0002;
  animation: opacity 0.2s linear;
  @keyframes opacity{
  from{
    opacity: 0;
    transform: scale(0.7);
  }
}
  }
`;

const TodosIcon = styled.div`
  .MuiIconButton-root {
    padding: 0 10px;
    .MuiSvgIcon-root {
      color: teal;
    }
  }
`;

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
            <Todos key={ item.id }>
              <li>
                { item.todo }
                <TodosIcon>
                  <IconButton><Edit/></IconButton>
                  <IconButton onClick={() => handleDelete(item.id)}><Delete /></IconButton>
                </TodosIcon>
              </li>
            </Todos>
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
