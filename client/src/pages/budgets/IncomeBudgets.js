import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listIncomes, deleteIncome } from '../../redux/actions/incomesAction';

import styled from 'styled-components';
import { Delete, Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const IncomesContainer = styled.div`
  width: 500px;
`;

const Incomes = styled.ul`
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

const IncomesItems = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: bold;
  span {
     padding-left: 10px;
     color: gray;
  }
`;

const IncomesButton = styled.div`
  .MuiIconButton-root {
    padding: 0;
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
