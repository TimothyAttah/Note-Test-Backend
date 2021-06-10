import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	padding: 30px 20px;
	@media (max-width: 900px) {
		display: block;
	}
`;

export const IncomeType = styled.form`
	label {
		padding-right: 10px;
		padding-left: 20px;
		color: ${props => (props.primary ? 'red' : 'green')};
		font-weight: bold;
	}

	input {
		border: 2px solid ${props => (props.primary ? 'red' : 'green')};
		padding: 10px;
		outline: none;
		border-radius: 10px;
	}
	.input-text {
		width: 400px;
	}
	.MuiButton-root {
		background-color: ${props => (props.primary ? 'red' : 'green')};
		color: #fff;
		margin-left: 10px;
		padding: 5px 0;
	}
	@media (max-width: 1100px) {
		.input-text {
			width: 300px;
		}
		.input-value {
			width: 120px;
		}
	}
	@media (max-width: 900px) {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 160px;
		label {
			padding-top: 20px;
		}
		.input-text {
			width: 70%;
		}
		.input-value {
			width: 50%;
		}
		.MuiButton-root {
			margin-left: 0px;
			width: 150px;
			padding: 7px 0;
			position: absolute;
			bottom: 0;
			left: 420px;
		}
	}
	@media (max-width: 768px) {
		.MuiButton-root {
			width: 100px;
			left: 390px;
		}
	}
	@media (max-width: 630px) {
		.input-text {
			width: 80%;
		}
		.MuiButton-root {
			width: 100px;
			left: 350px;
		}
	}
	@media (max-width: 540px) {
		.input-text {
			width: 85%;
		}
		.input-value {
			width: 55%;
		}
		.MuiButton-root {
			left: 305px;
		}
	}
	@media (max-width: 414px) {
		.input-text {
			width: 90%;
		}
		.MuiButton-root {
			left: 210px;
		}
	}
	@media (max-width: 375px) {
		.input-text {
			width: 94%;
		}
		.input-value {
			width: 58%;
		}
		.MuiButton-root {
			width: 80px;
			left: 201px;
		}
	}
	@media (max-width: 320px) {
		.input-value {
			width: 55%;
		}
		.MuiButton-root {
			left: 160px;
		}
	}
	@media (max-width: 280px) {
		.input-value {
			width: 50%;
		}
		.MuiButton-root {
			left: 120px;
		}
	}
`;

export const FormBudgetButton = styled.div`
	display: flex;
	align-items: center;
`;
