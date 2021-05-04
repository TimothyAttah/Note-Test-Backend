import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listIncomes } from '../../redux/actions/incomesAction';
import { listExpenses } from '../../redux/actions/expensesActions';
import { BalanceContainer, BalanceWrapper, TotalBalance, TotalContainer, TotalIncome } from './BudgetsTransactionStyles';


const BudgetsTransaction = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listExpenses() );
    dispatch( listIncomes() );
  }, [ dispatch ] );
  
  const expenses = useSelector( state => state.expensesReducer.expenses );
  const incomes = useSelector( state => state.incomesReducer.incomes );

  const incomeTransaction = incomes.map( income => income.value );
  const expensesTransaction = expenses.map( expense => expense.value );
  const totalIncome = incomeTransaction.reduce( ( acc, result ) => acc += result, 0 ).toFixed( 2 );
  const totalExpenses = expensesTransaction.reduce( ( acc, result ) => acc += result, 0 ).toFixed( 2 );
  const totalBalance = (totalIncome - totalExpenses).toFixed(2);
  
  return (
    <BalanceContainer>
      <BalanceWrapper>
        <TotalBalance>
          <h1> Balance: </h1>
          <h2>
            { totalBalance > 1 ? `+ $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
              ` $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
          </h2>
        </TotalBalance>
      </BalanceWrapper>
      <TotalContainer>
        <TotalIncome>
          <h3>
            Income:
          <span> { totalIncome > 1 ? `+ $${ totalIncome.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
              `$${ totalIncome.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
            </span>
          </h3>
        </TotalIncome>
      </TotalContainer>
      <TotalContainer>
        <TotalIncome primary>
          <h3>
            Expenses:
          <span>
              { totalExpenses > 1 ? `- $${ totalExpenses.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
                `$${ totalExpenses.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
            </span>
          </h3>
        </TotalIncome>
      </TotalContainer>
    </BalanceContainer>
  );
};

export default BudgetsTransaction;
