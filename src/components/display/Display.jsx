import React, { useContext } from 'react';

import { Wrap, Input } from './Display.style';

import { CalculatorContext } from '../calculator/Calculator';

const Display = () => {
	const { display, prevNumber } = useContext(CalculatorContext);

	return (
		<Wrap>
			<Input value={display || prevNumber} onChange={() => {}} />
		</Wrap>
	);
};

export default Display;
