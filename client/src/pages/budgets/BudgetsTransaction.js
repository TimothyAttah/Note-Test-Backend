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
  overflow: hidden;
`;

const TotalBalance = styled.div`
border: 2px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
 width: 100%;
  color: #fff;
  font-size: 30px;
  position: relative;
  padding-top: 30px;
  padding-bottom: 50px;
  opacity: 0.9;
  overflow: hidden;
  h2 {
   padding-right: 10px;
  }
  @media (max-width: 900px){
    font-size: 20px;
  }
  @media (max-width: 550px){
    font-size: 16px;
  }
  @media (max-width: 375px){
    font-size: 12px;
    h1, h2{
      font-size: 20px;
    }
  }
  `;

const TotalContainer = styled.div`
  padding-left: 450px;
  padding-top: 30px;
   @media (max-width: 1000px){
    padding-left: 300px;
  }
   @media (max-width: 700px){
    padding-left: 200px;
  }
   @media (max-width: 650px){
    padding-left: 150px;
  }
   @media (max-width: 450px){
    padding-left: 100px;
  }
   @media (max-width: 414px){
    padding-left: 60px;
  }
   @media (max-width: 375px){
    padding-left: 50px;
  }
   @media (max-width: 320px){
    padding-left: 20px;
  }
`;


const BalanceWrapper = styled.div`
  padding-left: 320px;
  border: 2px solid wheat;
 width: 80%;
 @media (max-width: 1000px){
    padding-left: 180px;
  }
    @media (max-width: 650px){
    padding-left: 90px;
  }
    @media (max-width: 450px){
    padding-left: 50px;
  }
    @media (max-width: 400px){
    padding-left: 30px;
  }
    @media (max-width: 375px){
    padding-left: 10px;
  }
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
   @media (max-width: 900px){
   font-size: 15px;
   width: 300px;
  }
   @media (max-width: 550px){
   font-size: 13px;
   width: 220px;
   span {
     right: 10px;
     letter-spacing: 1px;
   }
  }
   @media (max-width: 375px){
   font-size: 12px;
   width: 210px;
   span {
     right: 10px;
     letter-spacing: 0.5px;
   }
  }
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
    // <BalanceContainer>
    //     <BalanceWrapper>
    //   <TotalBalance>
    //        <h1> Balance: </h1>
       
    //         <h2>
    //            { totalBalance > 1 ? `+ $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
    //         ` $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
    //      </h2>
       
    //   </TotalBalance>
    //      </BalanceWrapper>
    //   <TotalContainer>
    //      <TotalIncome>
    //        <h3>
    //       Income:
    //       <span> { totalIncome > 1 ? `+ $${ totalIncome.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
    //         `$${ totalIncome.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
    //       </span>
    //     </h3>
    //    </TotalIncome>
    //   </TotalContainer>
    //   <TotalContainer>
    //     <TotalIncome primary>
    //        <h3>
    //       Expenses:
    //       <span>
    //         { totalExpenses > 1 ? `- $${ totalExpenses.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` :
    //           `$${ totalExpenses.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }
    //       </span>
    //     </h3>
    //    </TotalIncome>
    //   </TotalContainer>
        
    // </BalanceContainer>
    <div>
      <h1>Balance Page</h1>
    </div>
  );
};

export default BudgetsTransaction;
