import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listIncomes, deleteIncome } from '../../redux/actions/incomesAction';
import { Delete, Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { BudgetsContainer, Budgets, BudgetsButton, BudgetsItems } from './IncomeExpensesStyles';


const IncomeBudgets = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listIncomes() );
  }, [ dispatch ] );

  const incomes = useSelector( state => state.incomesReducer.incomes );
  console.log( incomes );
 
  return (
    <BudgetsContainer>
      <h1>Income Transaction</h1>
      {incomes.length ? (
        incomes.map( income => {
          return (
            <Budgets key={ income._id }>
              <li>
                <BudgetsItems>{ income.item }: <span>{ income.value }</span></BudgetsItems>
                <BudgetsButton>
                  <IconButton><Edit /></IconButton>
                  <IconButton onClick={ () => dispatch( deleteIncome( income._id ) ) }> <Delete /></IconButton>
                </BudgetsButton>
              </li>
            </Budgets>
          );
        } )
      ) : (
        <h2>Loading...</h2>
      ) }
    </BudgetsContainer>
  );
};

export default IncomeBudgets;
