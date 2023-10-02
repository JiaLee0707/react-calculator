import styled from 'styled-components';

export const DefaultButton = styled.button`
	border: 0.5px solid rgb(90, 84, 81);
	color: rgb(227, 225, 225);
	font-size: 3rem;
	font-weight: normal;

	&:active {
		filter: brightness(1.75);
	}
	${({ $custom }) => $custom && $custom};
`;
