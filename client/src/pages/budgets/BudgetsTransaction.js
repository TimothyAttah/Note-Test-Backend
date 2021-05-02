import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { listIncomes } from '../../redux/actions/incomesAction';
import { listExpenses } from '../../redux/actions/expensesActions';
import {images} from '../../components/Images'

const BalanceContainer = styled.div`
  width: 100%;
  height: 350px;
  background: url(${images.backgroundImgTwo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const TotalBalance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  position: relative;
  padding-bottom: 50px;
  width: 1000px;
  opacity: 0.9;
  span {
    position: absolute;
    right: 20px;
  };
`;

const TotalIncome = styled.div`
  width: 400px;
  position: relative;
  opacity: 0.9;
  background-color: ${ props => props.primary ? 'red' : 'green' };
  color: #fff;
  padding: 10px 20px;
  span {
    position: absolute;
    right: 20px;
    letter-spacing: 1.5px;
  };
`;

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
    <BalanceContainer>
      <TotalBalance>
        <h1>
        Balance:
        <span>
          { totalBalance > 1 ? `+ $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
            ` $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
        </span>
      </h1>
      </TotalBalance>
      <div style={{paddingLeft: '500px', paddingTop: '30px'}}>
         <TotalIncome>
           <h3>
          Income:
          <span> { totalIncome > 1 ? `+ $${ totalIncome.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
            `$${ totalIncome.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
          </span>
        </h3>
       </TotalIncome>
      </div>
      <div style={ { paddingLeft: '500px', paddingTop: '30px' } }>
        <TotalIncome primary>
           <h3>
          Expenses:
          <span>
            { totalExpenses > 1 ? `- $${ totalExpenses.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
              `$${ totalExpenses.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
          </span>
        </h3>
       </TotalIncome>
      </div>
        
    </BalanceContainer>
  );
};

export default BudgetsTransaction;
