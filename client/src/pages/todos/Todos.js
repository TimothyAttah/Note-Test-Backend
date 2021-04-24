import React from 'react';
import TodosForm from '../../components/forms/TodosForm';
import Nav from '../../components/navs/Nav';
import TodosLists from './TodosLists';

const Todos = () => {
  return (
    <div>
      <Nav />
      <TodosForm />
      <h1>To do list</h1>
      <TodosLists />
    </div>
  )
}

export default Todos
