import styled from 'styled-components';

export const Wrap = styled.div`
	//background-color: #61dafb;
	padding: 1rem;
	${({ theme }) => theme.common.wh('100%', '25%')};
	${({ theme }) => theme.common.flex('column', 'flex-end', 'flex-end')};
`;

export const Input = styled.input`
	//background-color: #61dafb;
	border: none;
	outline: none;
	caret-color: transparent;
	background-color: transparent;
	color: rgb(227, 225, 225);
	font-size: 5rem;
	font-weight: normal;
	text-align: end;
	${({ theme }) => theme.common.wh('100%', 'auto')};

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
