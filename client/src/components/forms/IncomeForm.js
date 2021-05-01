import React, {useState} from 'react';
import { Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createIncome } from '../../redux/actions/incomesAction';
import styled from 'styled-components';
import BudgetsNav from '../navs/BudgetsNav';
import { Add } from '@material-ui/icons';


const FormContainer = styled.form`
  border: 2px solid yellow;
  display: flex;
  align-items: center;
  position: relative;
`;


const IncomeType = styled.form`
 label {
   padding-right: 10px;
   padding-left: 20px;
   color: ${ props => props.primary ? 'red' : 'green'};
   font-weight: bold;
 }
 
  input{
    border: 2px solid ${ props => props.primary ? 'red' : 'green'};
    padding: 10px;
    outline: none;
    border-radius: 10px;
  }
  .input-text {
    width: 400px;
  }
  .MuiButton-root{
    background-color: ${ props => props.primary ? 'red' : 'green'};
    color: #fff;
    margin-left: 10px;
  }
`;

const FormBudgetButton = styled.div`
  display: flex;
  align-items: center;
  
`;

const IncomeForm = () => {
  const [ isOpen, setIsOpen ] = useState( false )

 
  return (
    <FormContainer>
      <FormBudgetButton>
        <h4>Choose Transaction </h4>
        <BudgetsNav setIsOpen={ setIsOpen } />
      </FormBudgetButton>
      { isOpen ? (
        <IncomeType primary>
          <label>Expenses Item:</label>
          <input
            type='text'
            placeholder='Enter expenses items...'
            className='input-text'
          />
          <label>Expenses Value:</label>
          <input
            type='number'
          />
          <Button variant='contained' size='small'>-</Button>
        </IncomeType>
      ) : (
        <IncomeType>
          <label>Income Item:</label>
          <input
            type='text'
            placeholder='Enter income items...'
            className='input-text'
          />
          <label>Income Value:</label>
          <input
            type='number'
            className='input-value'
          />
          <Button variant='contained' size='small' color='inherit'><Add /></Button>
        </IncomeType>
      ) }
    </FormContainer>
  );
};

export default IncomeForm;
