import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listExpenses, deleteExpenses } from '../../redux/actions/expensesActions';

import styled from 'styled-components';
import { Delete, Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const ExpensesContainer = styled.div`
  width: 500px;
  padding-top: 20px;
  padding-right: 20px;
  h1 {
    color: red;
    opacity: 0.7;
  }
  @media (max-width: 1000px){
    width: 320px;
    h1{
      font-size: 20px;
    }
  }
   @media (max-width: 650px){
    width: 280px;
    padding-right: 10px;
      h1{
      font-size: 16px;
    }
  }
   @media (max-width: 580px){
    width: 250px;
    padding-right: 10px;
      h1{
      font-size: 16px;
    }
  }
    @media (max-width: 510px){
    width: 200px;
  }
   @media (max-width: 414px){
    width: 175px;
     h1 {
      font-size: 13px;
      font-weight: bolder;
    }
  }
   @media (max-width: 360px){
    width: 160px;
  }
  @media (max-width: 320px){
    width: 130px;
     h1 {
      font-size: 11px;
      font-weight: bolder;
    }
  }
`;

const Expenses = styled.ul`
  padding: 0;
  margin: 0;
  li {
    border: 1px solid red;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
   @media (max-width: 1000px){
    li {
      font-size: 15px;
    }
  }
   @media (max-width: 580px){
    li {
      font-size: 12px;
    }
  }
   @media (max-width: 414px){
    li {
      font-size: 10px;
      font-weight: bolder;
    }
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
   @media (max-width: 414px){
    span {
      padding-left: 5px;
      font-weight: bolder;
    }
  }
`;

const ExpensesButton = styled.div`
  .MuiIconButton-root {
    padding: 0 5px;
    color: red;
    opacity: 0.9;
  }
  @media (max-width: 580px){
    padding: 0;
    .MuiSvgIcon-root {
      font-size: 12px;
    }
  }
  @media (max-width: 510px){
    .MuiIconButton-root {
      display: block;
      padding-bottom: 3px;
    }
  }
    @media (max-width: 414px){
   .MuiIconButton-root{
     margin-left: 15px;
   }
  }
    @media (max-width: 320px){
   .MuiIconButton-root{
     margin-left: 12px;
   }
  }
`;


const ExpensesBudgets = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listExpenses() )
  }, [ dispatch ] );

  const expenses = useSelector( state => state.expensesReducer.expenses );
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
