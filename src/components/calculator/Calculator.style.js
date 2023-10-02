import styled from 'styled-components';

export const Container = styled.div`
	${({ theme }) => theme.common.flex()};
	${({ theme }) => theme.common.container};
`;

export const CalculatorWrap = styled.div`
	min-width: 15rem;
	aspect-ratio: 3 / 4;
	background-color: #595351ff;
	opacity: 0.95;
	border-radius: 1rem;
	${({ theme }) => theme.common.wh('35%', 'auto')};
`;
