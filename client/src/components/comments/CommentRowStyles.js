import styled, { css } from 'styled-components';

export const Comments = styled.div`
	display: flex;
	width: 700px;
	padding: 10px;
`;

export const CommentsLeft = styled.div`
	padding-right: 10px;
`;

export const CommentsTop = styled.div`
	width: 600px;
	${props =>
		props.primary &&
		css`
			border: 1px solid #bdbdbd;
			display: flex;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;
			border-radius: 5px;
			padding: 0 10px;
			h4 {
				padding-bottom: 3px;
			}
			:hover {
				.delete-icon {
					display: block;
					cursor: pointer;
				}
			}
			.delete-icon {
				display: none;
			}
		`}
`;

export const CommentsBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	${props =>
		props.primary &&
		css`
			width: 150px;
		`}
	${props =>
		props.secondary &&
		css`
			display: flex;
			align-items: center;
		`}
`;
