import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosLists } from '../../redux/actions/todosAction';

const TodosLists = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( todosLists() );
  }, [ dispatch ] );
  const {todos} = useSelector( state => state.todosReducer )
  console.log(todos);
  return (
    <div>
      {todos.length ? (
        todos.map( todo => {
          return (
            <ul key={ todo.id }>
              <li>{ todo.content }</li>
            </ul>
          )
        } )
      ) : (
        <h2>You have nothing to do</h2>
      ) }
    </div>
  );
}

export default TodosLists;
