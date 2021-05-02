import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listIncomes } from '../../redux/actions/incomesAction';
import { listExpenses } from '../../redux/actions/expensesActions';


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
  const totalBalance = totalIncome - totalExpenses;
  
  return (
    <div>
      <h1>
        Balance:
        <span>
          { totalBalance > 1 ? `+ $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
            ` $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
        </span>
      </h1>
      <div>
        <h3>
          Income:
          <span> { totalIncome > 1 ? `+ $${ totalIncome.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
            `$${ totalIncome.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
          </span>
        </h3>
        <h3>
          Expenses:
          <span>
            { totalExpenses > 1 ? `- $${ totalExpenses.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
              `$${ totalExpenses.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
          </span>
        </h3>
      </div>
    </div>
  );
};

export default BudgetsTransaction;
