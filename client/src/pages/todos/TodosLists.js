import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { todosLists } from '../../redux/actions/todosAction';
import TodoItem from './TodoItem';


const TodosContainer = styled.div`
   h2 {
  font-size: 2em;
  text-align: center;
  color: #3d3d3d;
  margin-top: 50px;
  margin-bottom: 20px;
  text-transform: capitalize;
  @media (max-width: 411px){
    font-size: 20px;
  }
   }
`

const TodosLists = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( todosLists() );
  }, [ dispatch ] );
  const { todos } = useSelector( state => state.todosReducer )
  console.log(todos);
  
  return (
    <TodosContainer>
      {todos.length ? (
        todos.map( todo => {
          return (
            <TodoItem
              todo={ todo}
              key={ todo._id }
            />
          )
        } )
      ) : (
        <h2>You have nothing to do</h2>
      ) }
     {todos.length > 0 ?  <h2>You have { todos.length } things to do</h2>: ''}
    </TodosContainer>
  );
}

export default TodosLists;
