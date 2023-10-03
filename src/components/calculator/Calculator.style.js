import styled from 'styled-components';

export const Container = styled.div`
	${({ theme }) => theme.common.flex()};
	${({ theme }) => theme.common.container};
`;

export const CalculatorWrap = styled.div`
	min-width: 15rem;
	aspect-ratio: 3 / 4;
	//opacity: 0.95;
	border-radius: 1rem;
	overflow: hidden;
	background-color: ${({ theme }) => theme.color.calculator};
	${({ theme }) => theme.common.wh('25%', 'auto')};
`;

export const Buttons = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-areas:
		'conversion conversion conversion operation'
		'digits digits digits operation'
		'digits digits digits operation'
		'digits digits digits operation'
		'digits digits digits operation';
	${({ theme }) => theme.common.wh('100%', '75%')};
`;
