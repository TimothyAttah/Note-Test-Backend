import React from 'react';
import Nav from '../../components/navs/Nav';
import TodosLists from './TodosLists';

const Todos = () => {
  return (
    <div>
     <Nav />
      <h1>To do list</h1>
      <TodosLists />
    </div>
  )
}

export default Todos
