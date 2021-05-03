import { toast } from 'react-toastify';
import { CREATE_EXPENSES, DELETE_EXPENSES, EDIT_EXPENSES, LIST_EXPENSES } from '../type';


export const createExpenses = ( expenses ) => async dispatch => {
  try {
    toast.success( 'Added new expenses' )
    dispatch( {
      type: CREATE_EXPENSES,
      payload: expenses
    } )
  } catch ( error ) {
    console.log( error );
  }
};

export const listExpenses = () => async dispatch => {
  try {
    dispatch( {
      type: LIST_EXPENSES,
    } )
  } catch ( error ) {
    console.log( error );
  }
};

export const deleteExpenses = ( id ) => async dispatch => {
  try {
    toast.success('Expenses Deleted')
    dispatch( {
      type: DELETE_EXPENSES,
      payload: id
    })
  } catch (error) {
    console.log(error);
  }
}
export const editExpenses = ( expenses, id ) => async dispatch => {
  try {
    toast.success('Expenses edited successfully!')
    dispatch( {
      type: EDIT_EXPENSES,
      payload: expenses, id
    })
  } catch (error) {
    console.log(error);
  }
}
