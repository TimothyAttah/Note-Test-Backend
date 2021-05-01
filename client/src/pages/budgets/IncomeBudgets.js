import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listIncomes} from '../../redux/actions/incomesAction';


const IncomeBudgets = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listIncomes() )
  }, [ dispatch ] );

  const incomes = useSelector( state => state.incomesReducer.incomes );
  console.log(incomes);
  return (
    <div>
      <h1>Income Transaction</h1>
      {incomes ? (
        incomes.map( income => {
          return (
            <ul key={income.id}>
              <li>{ income.item } <span>{ income.value }</span></li>
            </ul>
          )
        })
      ): (
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default IncomeBudgets
