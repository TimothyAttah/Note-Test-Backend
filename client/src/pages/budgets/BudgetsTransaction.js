import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { listIncomes } from '../../redux/actions/incomesAction';
import { listExpenses } from '../../redux/actions/expensesActions';
import {images} from '../../components/Images'

const BalanceContainer = styled.div`
  /* width: 100%; */
  height: 350px;
  background: url(${images.backgroundImgTwo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
`;

const TotalBalance = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: 30px;
  position: relative;
  padding-top: 30px;
  padding-bottom: 50px;
  padding-left: 300px;
  opacity: 0.9;
  overflow: hidden;
  span {
    position: absolute;
    right: 300px;
  };
   @media (max-width:1125px){
    padding-left: 220px;
    span {
    right: 200px;
  };
  }
   @media (max-width:950px){
    padding-left: 180px;
    span {
    right: 120px;
  };
  }
   @media (max-width:850px){
     font-size: 20px;
    padding-left: 180px;
    span {
    right: 150px;
  };
  }
   @media (max-width:700px){
     font-size: 20px;
    padding-left: 120px;
    span {
    right: 100px;
  };
  }
   @media (max-width:575px){
     font-size: 18px;
    padding-left: 80px;
    span {
    right: 100px;
  };
  }
   @media (max-width:500px){
     font-size: 15px;
    padding-left: 80px;
    span {
    right: 60px;
  };
  }
   @media (max-width:415px){
     font-size: 14px;
    padding-left: 60px;
    span {
    right: 40px;
  };
  }
   @media (max-width:360px){
     font-size: 12px;
    padding-left: 40px;
    span {
    right: 20px;
  };
  }
   @media (max-width:280px){
     font-size: 12px;
    padding-left: 20px;
    span {
    right: 20px;
  };
  }
  /* @media (max-width:1300px){
   justify-content: flex-start;
   padding-left: 180px;
   span {
     padding-right: 200px;
   }
  } */
  /* @media (max-width:800px){
    font-size: 20px;
   padding-left: 120px;
   span {
     padding-right: 350px;
   }
  } */
  /* @media (max-width:768px){
    font-size: 20px;
   padding-left: 100px;
   span {
     padding-right: 350px;
   }
  }
  @media (max-width:650px){
    font-size: 18px;
   padding-left: 100px;
   span {
     padding-right: 480px;
   }
  }
  @media (max-width:530px){
    font-size: 15px;
    font-weight: bold;
   padding-left: 60px;
   span {
     padding-right: 550px;
   }
  }
  @media (max-width:450px){
   span {
     padding-right: 630px;
   }
  }
   @media (max-width:380px){
    font-size: 12px;
    font-weight: bold;
   padding-left: 40px;
   span {
     padding-right: 690px;
   }
  }
   @media (max-width:380px){
   padding-left: 20px;
   span {
     padding-right: 730px;
   }
  } */
`;

const TotalContainer = styled.div`
  padding-left: 450px;
  padding-top: 30px;
  @media (max-width:1125px){
    padding-left: 400px;
  }
  @media (max-width:950px){
    padding-left: 300px;
  }
  @media (max-width:850px){
    padding-left: 250px;
  }
  @media (max-width:700px){
    padding-left: 200px;
  }
  @media (max-width:575px){
    padding-left: 120px;
  }
  @media (max-width:415px){
    padding-left: 80px;
  }
  @media (max-width:320px){
    padding-left: 60px;
  }
  @media (max-width:290px){
    padding-left: 35px;
  }
  /* @media (max-width: 1000px){
    padding-left: 250px;
  }
  @media (max-width: 800px){
    padding-left: 180px;
  }
  @media (max-width: 650px){
    padding-left: 100px;
  }
  @media (max-width: 450px){
    padding-left: 60px;
  }
  @media (max-width: 380px){
    padding-left: 40px;
  } */
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
   @media (max-width:850px){
    width: 300px;
  }
   @media (max-width:575px){
     font-size: 12px;
      span {
    letter-spacing: 1px;
  };
  }
   @media (max-width:500px){
     width: 250px;
     font-size: 10px;
     font-weight: bolder;
      span {
    letter-spacing: 0.5px;
  };
  }
   @media (max-width:375px){
     width: 200px;
     font-size: 11px;
      span {
    letter-spacing: 0.5px;
    right: 10px;
  };
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
