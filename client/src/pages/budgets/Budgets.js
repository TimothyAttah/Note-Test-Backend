import { Divider } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import BudgetsForm from '../../components/forms/BudgetsForm';
import Nav from '../../components/navs/Nav';
import BudgetsTransaction from './BudgetsTransaction';
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
      <div><BudgetsTransaction /></div>
      <div>
        <BudgetsForm />
      </div>
      <Divider />
      <BudgetsContainer>
        <IncomeBudgets />
        <ExpensesBudgets />
      </BudgetsContainer>
    </div>
  )
}

export default Budgets;
