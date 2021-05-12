import React from 'react';
import { Button, ButtonGroup, Checkbox } from '@material-ui/core';
import { CheckCircle, Create, Delete } from '@material-ui/icons';
import styled from 'styled-components';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { todosCheck, todosDelete } from '../../redux/actions/todosAction';


const Todos = styled.ul`
  margin: 0;
  padding: 0;
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
  margin: 15px 0;
  padding: 10px;
  text-transform: capitalize;
   .is__complete {
    background-color: teal;
    text-decoration: line-through;
  }
  h4, p {
    padding-bottom: 10px;
  }
  p {
    color: #3d3d3d;
    font-weight: 500;
    font-size: 15px;
  }
 
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

const TodoItem = ( { todo } ) => {
  const dispatch = useDispatch();

  const handleCheck = (id) => {
    dispatch(todosCheck(id))
  }
 
  return (
    <div>
      <Todos>
        <li>
          <div>
            <Checkbox
              color='primary'
              checked={ todo.isComplete }
              onChange={ ()=>handleCheck(todo.id) }
              inputProps={{'aria-label': 'secondary checkbox'}}
            />
            { todo.isComplete ? (
              <h4 className='is__complete'>{ todo.todo }</h4>
            ): (
              <h4>{ todo.todo }</h4>
            )}
            <p>Added: 4 days ago</p>
          </div>
          <div>
            <ButtonGroup size='small'>
              <Button><CheckCircle color='action' /></Button>
              <Button><Link to={`/api/users/todos/${todo.id}`}><Create color='primary' /></Link></Button>
              <Button onClick={()=> dispatch(todosDelete(todo.id))}><Delete color='secondary' /></Button>
            </ButtonGroup>
          </div>
        </li>
      </Todos>
    </div>
  );
};

export default TodoItem;
