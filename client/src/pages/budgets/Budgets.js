import React from 'react'
import styled from 'styled-components';
import BudgetsForm from '../../components/forms/BudgetsForm';
import Nav from '../../components/navs/Nav';
import ExpensesBudgets from './ExpensesBudgets';
import IncomeBudgets from './IncomeBudgets';

const BudgetsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Budgets = () => {
  return (
    <div>
      <Nav />
      <h1>Budgets Page</h1>
      <div>
        <BudgetsForm />
      </div>
      <BudgetsContainer>
        <IncomeBudgets />
        <ExpensesBudgets />
      </BudgetsContainer>
    </div>
  )
}

export default Budgets;
