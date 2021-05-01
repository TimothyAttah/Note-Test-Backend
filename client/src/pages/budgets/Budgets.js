import React from 'react'
import Nav from '../../components/navs/Nav';
import IncomeBudgets from './IncomeBudgets';

const Budgets = () => {
  return (
    <div>
      <Nav />
      <h1>Budgets Page</h1>
      <div>
        <IncomeBudgets />
      </div>
    </div>
  )
}

export default Budgets;
