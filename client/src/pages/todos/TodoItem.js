import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { CheckCircle, Create, Delete } from '@material-ui/icons';
import styled from 'styled-components';


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
  h4, p {
    padding-bottom: 10px;
  }
  p {
    color: #3d3d3d;
    font-weight: 500;
    font-size: 15px;
  }
  .is__complete {
    text-decoration: line-through;
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

const TodoItem = ({todo, id, isComplete}) => {
  return (
    <div>
      <Todos>
        <li>
          <div>
            <h4  className={isComplete && 'is__complete' }>{ todo }</h4>
            <p>Added: 4 days ago</p>
          </div>
          <div>
            <ButtonGroup size='small'>
              <Button><CheckCircle color='action' /></Button>
              <Button><Create color='primary' /></Button>
              <Button><Delete color='secondary' /></Button>
            </ButtonGroup>
          </div>
        </li>
      </Todos>
    </div>
  );
};

export default TodoItem;
