import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listExpenses, deleteExpenses } from '../../redux/actions/expensesActions';
import { Delete, Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Budgets, BudgetsContainer, BudgetsButton, BudgetsItems } from './IncomeExpensesStyles';
import { user } from '../../components/NameInitials';


const ExpensesBudgets = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listExpenses() );
  }, [ dispatch ] );

  const expenses = useSelector( state => state.expensesReducer.expenses );
  return (
    <div>
      {user && expenses ? (
        <BudgetsContainer expenses>
      <h1>Expenses Transaction</h1>
      {expenses.length ? (
        expenses.map( expense => {
          return (
            expense && expense.postedBy._id === user.results._id && (
               <Budgets expenses key={ expense._id }>
              <li>
                <BudgetsItems expenses>{ expense.item }: <span>{ expense.value }</span></BudgetsItems>
                <BudgetsButton expenses>
                  <IconButton><Edit /></IconButton>
                  <IconButton onClick={ () => dispatch( deleteExpenses( expense._id ) ) }> <Delete /></IconButton>
                </BudgetsButton>
              </li>
            </Budgets>
           )
          );
        } )
      ) : (
        <h2>You don't have any expenses</h2>
      ) }
    </BudgetsContainer>
      ): (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ExpensesBudgets;
