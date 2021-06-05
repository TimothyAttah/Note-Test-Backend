import React from 'react';
import styled from 'styled-components';
import TodosForm from '../../components/forms/TodosForm';
import Nav from '../../components/navs/Nav';
import TodosLists from './TodosLists';

const MainContainer = styled.main`
	background-color: #e5e5e5;
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TodosContainer = styled.div`
	width: 500px;
	min-height: 500px;
	border-radius: 20px;
	box-shadow: 10px 10px 13px #0002, -10px -10px 13px #fff7;

	h1 {
		text-align: center;
		font-size: 2.5em;
		text-transform: uppercase;
		/* color: #e5e5e5; */
		color: #3d3d3d;
		margin-bottom: 20px;
		text-shadow: -3px -3px 3px #fff7, 3px 3px 3px #0003;
	}
`;

const Todos = () => {
	return (
		<div>
			<Nav />
			<MainContainer>
				<TodosContainer>
					<div style={{ padding: '20px' }}>
						<TodosForm />
					</div>
					<h1>To do list</h1>
					<TodosLists />
				</TodosContainer>
			</MainContainer>
		</div>
	);
};

export default Todos;
