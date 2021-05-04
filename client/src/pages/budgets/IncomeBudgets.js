import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listIncomes, deleteIncome } from '../../redux/actions/incomesAction';

import styled from 'styled-components';
import { Delete, Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const IncomesContainer = styled.div`
  width: 500px;
  padding-top: 20px;
  padding-left: 20px;
   h1 {
    color: green;
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
    padding-left: 10px;
      h1{
      font-size: 16px;
    }
  }
   @media (max-width: 580px){
    width: 250px;
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

const Incomes = styled.ul`
  padding: 0;
  margin: 0;
  li {
    border: 1px solid green;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
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

const IncomesItems = styled.div`
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

const IncomesButton = styled.div`
  .MuiIconButton-root {
    padding: 0 5px;
    color: green;
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


const IncomeBudgets = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listIncomes() )
  }, [ dispatch ] );

  const incomes = useSelector( state => state.incomesReducer.incomes );
  console.log(incomes);
  return (
    <IncomesContainer>
      <h1>Income Transaction</h1>
      {incomes.length ? (
        incomes.map( income => {
          return (
            <Incomes key={income.id}>
              <li>
                <IncomesItems>{ income.item }: <span>{ income.value }</span></IncomesItems>
                <IncomesButton>
                  <IconButton><Edit /></IconButton>
                  <IconButton onClick={() => dispatch(deleteIncome(income.id))}> <Delete /></IconButton>
                </IncomesButton>
              </li>
            </Incomes>
          )
        })
      ): (
        <h2>Loading...</h2>
      )}
    </IncomesContainer>
  )
}

export default IncomeBudgets
