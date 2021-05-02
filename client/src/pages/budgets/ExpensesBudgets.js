import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listExpenses, deleteExpenses } from '../../redux/actions/expensesActions';

import styled from 'styled-components';
import { Delete, Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const ExpensesContainer = styled.div`
  width: 500px;
`;

const Expenses = styled.ul`
  padding: 0;
  margin: 0;
  li {
    border: 2px solid green;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ExpensesItems = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: bold;
  span {
     padding-left: 10px;
     color: gray;
  }
`;

const ExpensesButton = styled.div`
  .MuiIconButton-root {
    padding: 0;
  }
`;


const ExpensesBudgets = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listExpenses() )
  }, [ dispatch ] );

  const expenses = useSelector( state => state.expensesReducer.expenses );
  console.log(expenses);
  return (
    <ExpensesContainer>
      <h1>Expenses Transaction</h1>
      {expenses.length ? (
        expenses.map( expense => {
          return (
            <Expenses key={expense.id}>
              <li>
                <ExpensesItems>{ expense.item }: <span>{ expense.value }</span></ExpensesItems>
                <ExpensesButton>
                  <IconButton><Edit /></IconButton>
                  <IconButton onClick={()=> dispatch(deleteExpenses(expense.id))}> <Delete /></IconButton>
                </ExpensesButton>
              </li>
            </Expenses>
          )
        })
      ): (
        <h2>Loading...</h2>
      )}
    </ExpensesContainer>
  )
}

export default ExpensesBudgets
