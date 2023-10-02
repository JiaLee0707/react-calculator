import styled, { css } from 'styled-components';

export const Wrap = styled.div`
	grid-area: digits;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	flex-direction: row-reverse;
`;

export const DigitsButton = css`
	flex: 1 0 30%;
	background-color: rgb(130, 126, 124);

	${({ $isZero }) => $isZero && 'flex: 2 0 60%'};
`;
