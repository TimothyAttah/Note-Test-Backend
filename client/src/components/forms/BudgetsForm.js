import React, {useState} from 'react';
import { Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createIncome } from '../../redux/actions/incomesAction';
import { createExpenses } from '../../redux/actions/expensesActions';
import styled from 'styled-components';
import BudgetsNav from '../navs/BudgetsNav';
import { Add } from '@material-ui/icons';
import { v4 } from 'uuid';


const FormContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 30px 20px;
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
    padding: 5px 0;
  }
`;

const FormBudgetButton = styled.div`
  display: flex;
  align-items: center;
`;

const BudgetsForm = () => {
  const [ isOpen, setIsOpen ] = useState( false );
  const [ item, setItem ] = useState( '' );
  const [ value, setValue ] = useState( '' );
  const dispatch = useDispatch();

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const newTransaction = {
      id: v4(),
      item,
      value: parseInt(value)
    }

    if ( isOpen  ) {
      if ( item && value !== '' ) {
        dispatch( createExpenses( newTransaction ) );
      } else {
        return null
      }
    } else {
      if ( item && value !== '' ) {
        dispatch( createIncome( newTransaction ) );
      } else {
        return null;
      }
    }

    setItem( '' )
    setValue('')
  }


  return (
    <FormContainer >
      <FormBudgetButton>
        <h4>Choose Transaction </h4>
        <BudgetsNav setIsOpen={ setIsOpen } />
      </FormBudgetButton>
      { isOpen ? (
        <IncomeType primary onSubmit={ handleSubmit }>
          <label>Expenses Item:</label>
          <input
            type='text'
            placeholder='Enter expenses items...'
            className='input-text'
            onChange={ ( e ) => setItem( e.target.value ) }
            value={ item }
            name='item'
          />
          <label>Expenses Value:</label>
          <input
            type='number'
            onChange={ ( e ) => setValue( e.target.value ) }
            name='value'
            value={ value }
          />
          <Button type='submit' variant='contained' size='small'>-</Button>
        </IncomeType>
      ) : (
        <IncomeType onSubmit={ handleSubmit }>
          <label>Income Item:</label>
          <input
            type='text'
            placeholder='Enter income items...'
            className='input-text'
            onChange={ ( e ) => setItem( e.target.value ) }
            name='item'
            value={ item }
          />
          <label>Income Value:</label>
          <input
            type='number'
            className='input-value'
            onChange={ ( e ) => setValue( e.target.value ) }
            name='value'
            value={ value }
          />
          <Button type='submit' variant='contained' size='small' color='inherit'><Add /></Button>
        </IncomeType>
      ) }
    </FormContainer>
  );
};

export default BudgetsForm;
