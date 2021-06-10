import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createIncome } from '../../redux/actions/incomesAction';
import { createExpenses } from '../../redux/actions/expensesActions';
import BudgetsNav from '../navs/BudgetsNav';
import { Add } from '@material-ui/icons';
import {
	FormBudgetButton,
	FormContainer,
	IncomeType,
} from './BudgetsFormStyles';

const BudgetsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [item, setItem] = useState('');
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const newTransaction = {
			item,
			value: parseInt(value),
		};

		if (isOpen) {
			dispatch(createExpenses(newTransaction));
		} else {
			dispatch(createIncome(newTransaction));
		}

		setItem('');
		setValue('');
	};

	return (
		<FormContainer>
			<FormBudgetButton>
				<h4>Choose Transaction </h4>
				<BudgetsNav setIsOpen={setIsOpen} />
			</FormBudgetButton>
			{isOpen ? (
				<IncomeType primary onSubmit={handleSubmit}>
					<label>Expenses Item:</label>
					<input
						type='text'
						placeholder='Enter expenses items...'
						className='input-text'
						onChange={e => setItem(e.target.value)}
						value={item}
						name='item'
					/>
					<label>Expenses Value:</label>
					<input
						type='number'
						onChange={e => setValue(e.target.value)}
						name='value'
						value={value}
						className='input-value'
					/>
					<Button type='submit' variant='contained' size='small'>
						-
					</Button>
				</IncomeType>
			) : (
				<IncomeType onSubmit={handleSubmit}>
					<label>Income Item:</label>
					<input
						type='text'
						placeholder='Enter income items...'
						className='input-text'
						onChange={e => setItem(e.target.value)}
						name='item'
						value={item}
					/>
					<label>Income Value:</label>
					<input
						type='number'
						className='input-value'
						onChange={e => setValue(e.target.value)}
						name='value'
						value={value}
					/>
					<Button
						type='submit'
						variant='contained'
						size='small'
						color='inherit'
					>
						<Add />
					</Button>
				</IncomeType>
			)}
		</FormContainer>
	);
};

export default BudgetsForm;
