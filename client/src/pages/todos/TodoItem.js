import React, { useState } from 'react';
import { Button, ButtonGroup, Checkbox } from '@material-ui/core';
import { CheckCircle, Create, Delete } from '@material-ui/icons';
import styled from 'styled-components';
import moment from 'moment';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { checkTodos, todosDelete } from '../../redux/actions/todosAction';
import history from '../../history';


const Todos = styled.ul`
  margin: 0;
  padding: 0;
  .status {
    background-color: teal;
    color: #fff7;
    text-decoration: line-through;
  }
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
  const { todosId } = useParams();
  const [isComplete ,setIsComplete ] = useState( todo.isComplete );

  const handleCheck = ( todo, id ) => {
    dispatch( checkTodos( todo, id ) )
    history.push('/api/users/todos')
  }

  const handleEdit = () => {
    window.scrollTo( {
      top: 0,
      left: 0,
      behavior: 'smooth'
    } )
  };

  return (
    <div>
      <Todos>
        <li className='status'>
          <div>
          
               <Checkbox
              color='primary'
              checked={ todo.isComplete }
              onChange={ () => setIsComplete(dispatch(checkTodos(todo, todo._id))) }
              inputProps={{'aria-label': 'secondary checkbox'}}
            />
           
            { todo.isComplete ? (
              <h4 className='is__complete'>{ todo.name }</h4>
            ): (
              <h4>{ todo.name }</h4>
            )}
            <p>Added: { moment(todo.date).fromNow()}</p>
          </div>
          <div>
            <ButtonGroup size='small'>
              <Button onClick={() => handleCheck( todo, todosId)}><Link to={`/api/users/todos/${todo._id}/edit`}></Link><CheckCircle color='action' /></Button>
              <Button onClick={handleEdit}><Link to={`/api/users/todos/${todo._id}/edit`}><Create color='primary' /></Link></Button>
              <Button onClick={()=> dispatch(todosDelete(todo._id))}><Delete color='secondary' /></Button>
            </ButtonGroup>
          </div>
        </li>
      </Todos>
    </div>
  );
};

export default TodoItem;
