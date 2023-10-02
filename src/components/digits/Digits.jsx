import React, { useContext } from 'react';

import Button from '../common/button/Button';

import { Wrap, DigitsButton } from './Digits.style';

import { CalculatorContext } from '../calculator/Calculator';

const DIGITS = [
	'0',
	'.',
	...Array.from({ length: 9 }, (value, num) => num + 1),
].reverse();

const Digits = () => {
	const { setDisplay } = useContext(CalculatorContext);

	return (
		<Wrap>
			{DIGITS.map((digits, index) => (
				<Button
					key={index}
					$custom={DigitsButton}
					$isZero={digits === '0'}
					onClick={() => setDisplay(digits)}>
					{digits}
				</Button>
			))}
		</Wrap>
	);
};

export default Digits;
