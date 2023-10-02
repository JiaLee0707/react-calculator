import styled, { css } from 'styled-components';

export const Wrap = styled.div`
	grid-area: conversion;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	//flex-direction: row-reverse;
`;

export const ConversionButton = css`
	flex: 1 0 0;
	background-color: rgb(105, 100, 98);
	grid-area: conversion;
`;
