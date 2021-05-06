import { toast } from 'react-toastify';
import { CREATE_INCOME, DELETE_INCOME, EDIT_INCOME, LIST_INCOMES } from '../type';
import * as api from '../api/notesApi';

export const createIncome = ( incomes ) => async dispatch => {
  try {
    toast.success( 'Added new Income' )
    dispatch( {
      type: CREATE_INCOME,
      payload: incomes
    } )
  } catch ( error ) {
    console.log( error );
  }
};

export const listIncomes = () => async dispatch => {
  try {
    const { data } = await api.getIncomes();
    console.log( data );
    dispatch( {
      type: LIST_INCOMES,
      payload: data
    })
  } catch ( error ) {
    console.log( error );
  }
};

export const deleteIncome = ( id ) => async dispatch => {
  try {
    toast.success('Income Deleted')
    dispatch( {
      type: DELETE_INCOME,
      payload: id
    })
  } catch (error) {
    console.log(error);
  }
}
export const editIncome = ( incomes, id ) => async dispatch => {
  try {
    toast.success('Income edited successfully!')
    dispatch( {
      type: EDIT_INCOME,
      payload: incomes, id
    })
  } catch (error) {
    console.log(error);
  }
}
