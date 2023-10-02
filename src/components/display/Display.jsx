import React, { useContext } from 'react';

import { Wrap, Input } from './Display.style';

import { CalculatorContext } from '../calculator/Calculator';

const Display = () => {
	const { result } = useContext(CalculatorContext);

	return (
		<Wrap>
			<Input type="number" value={result} />
		</Wrap>
	);
};

export default Display;
