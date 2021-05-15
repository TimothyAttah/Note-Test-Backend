import React, { useState } from 'react';
import { Button, ButtonGroup, Checkbox } from '@material-ui/core';
import { Create, Delete } from '@material-ui/icons';
import styled from 'styled-components';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkTodos, todosDelete } from '../../redux/actions/todosAction';


const Todos = styled.ul`
  margin: 0;
  padding: 0;
  .status {
    background-color: #3d3d3d;
    color: #fff;
    text-decoration: line-through;
    .MuiCheckbox-root{
      color: #fff;
    }
      h4, p {
         opacity: 0.7;
      }
  }
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
  margin: 15px 0;
  padding: 10px;
  text-transform: capitalize;
 .PrivateSwitchBase-input-4{
      border: 2px solid red;
     input {
       background-color: white;
       color: -internal-light-dark(white, black);
     }
    }
  p {
    color: #909090;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    justify-items: flex-end;
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

const TodoName = styled.div`
  display: flex;
 justify-content: center;
 h4 {
   padding: 10px 0;
 }
`;

const TodoIcons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content:flex-end;
  .MuiSvgIcon-root{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`;

const TodoItem = ( { todo } ) => {
  const dispatch = useDispatch();
  const [isComplete ,setIsComplete ] = useState( todo.isComplete );

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
        { todo.isComplete ? (
           <li className='status'>
          <TodoName>
              <div>
              <Checkbox
              color={todo.isComplete ? 'default' : 'primary'}
              checked={ isComplete }
              onChange={ () => setIsComplete(dispatch(checkTodos(todo, todo._id))) }
              inputProps={{'aria-label': 'secondary checkbox'}}
            />
             </div>
              <div>
              <h4>{ todo.name }</h4>
              <p>Added: { moment(todo.date).fromNow()}</p>
              </div>
          </TodoName>
          <TodoIcons>
            <ButtonGroup size='small'>
              <Button onClick={handleEdit}><Link to={`/api/users/todos/${todo._id}/edit`}><Create color='primary' /></Link></Button>
              <Button onClick={()=> dispatch(todosDelete(todo._id))}><Delete color='secondary' /></Button>
            </ButtonGroup>
          </TodoIcons>
        </li>
        ) : (
             <li>
         <TodoName>
              <div>
              <Checkbox
              color={todo.isComplete ? 'default' : 'primary'}
              checked={ todo.isComplete }
              onChange={ () => setIsComplete(dispatch(checkTodos(todo, todo._id))) }
              inputProps={{'aria-label': 'secondary checkbox'}}
            />
             </div>
              <div>
              <h4>{ todo.name }</h4>
              <p>Added: { moment(todo.date).fromNow()}</p>
              </div>
          </TodoName>
          <TodoIcons>
            <ButtonGroup size='small'>
              <Button onClick={handleEdit}><Link to={`/api/users/todos/${todo._id}/edit`}><Create color='primary' /></Link></Button>
              <Button onClick={()=> dispatch(todosDelete(todo._id))}><Delete color='secondary' /></Button>
            </ButtonGroup>
          </TodoIcons>
        </li>
        )}
       
      </Todos>
    </div>
  );
};

export default TodoItem;
