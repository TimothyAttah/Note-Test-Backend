import { toast } from 'react-toastify';
import { CREATE_INCOME, DELETE_INCOME, EDIT_INCOME, LIST_INCOMES } from '../type';
import * as api from '../api/notesApi';

export const createIncome = ( incomeData ) => async dispatch => {
  try {
    const { data } = await api.createIncomes( incomeData );
    toast.success( data.message )
    dispatch( {
      type: CREATE_INCOME,
      payload: data.newIncome
    })
  } catch ( err ) {
    if ( err.response && err.response.data ) {
     return toast.error(err.response.data.error)
    }
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

export const deleteIncome = ( incomeId ) => async dispatch => {
  try {
     await api.deleteIncome(incomeId)
    toast.success('Income deleted successfully')
    dispatch( {
      type: DELETE_INCOME,
      payload: incomeId
    })
  } catch (err) {
    if ( err.response && err.response.data ) {
      return toast.error(err.response.data.error)
    }
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
