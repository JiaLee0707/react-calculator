import React, { useContext } from 'react';

import { Wrap, Input } from './Display.style';

import { CalculatorContext } from '../calculator/Calculator';

import formatNumberWithCommas from '../../utils/formatNumberWithCommas';

const Display = () => {
	const { display, getLastDigits } = useContext(CalculatorContext);

	return (
		<Wrap>
			<Input
				value={
					formatNumberWithCommas(display) || formatNumberWithCommas(getLastDigits())
				}
				onChange={() => {}}
			/>
		</Wrap>
	);
};

export default Display;
