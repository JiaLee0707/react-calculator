import styled from 'styled-components';

export const ToggleButton = styled.button`
	position: absolute;
	top: 2vh;
	right: 1vw;
	padding: 0 0.5rem;
	background-color: #fff;
	border-radius: 5rem;
	border: 1px solid ${({ theme }) => theme.color.title};
	${({ theme }) => theme.common.wh('13rem', '6rem')};
	${({ theme }) => theme.common.flex('row', 'center', 'space-between')};
`;

export const Circle = styled.div`
	background-color: #fff;
	aspect-ratio: 1/ 1;
	border-radius: 100%;
	border: 1px solid ${({ theme }) => theme.color.title};
	${({ theme }) => theme.common.wh('auto', '85%')};
`;

export const Logo = styled.img`
	//aspect-ratio: 1/ 1;
	${({ theme }) => theme.common.wh('55%', 'auto')};
`;
