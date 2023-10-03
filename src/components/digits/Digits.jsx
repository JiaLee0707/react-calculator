import React, { useCallback, useContext } from 'react';

import Button from '../common/button/Button';

import { Wrap, DigitsButton } from './Digits.style';

import { MESSAGE } from '../../constants/Message';

import { CalculatorContext } from '../calculator/Calculator';

const DIGITS = [
	'0',
	'.',
	...Array.from({ length: 9 }, (value, num) => num + 1),
].reverse();

const Digits = () => {
	const { display, setDisplay } = useContext(CalculatorContext);

	const onClick = useCallback(
		(digits) => {
			if (display.length > 9) alert(MESSAGE.MAX_LENGTH);
			else setDisplay(digits);
		},
		[display],
	);

	return (
		<Wrap>
			{DIGITS.map((digits, index) => (
				<Button
					key={index}
					$custom={DigitsButton}
					$isZero={digits === '0'}
					onClick={() => onClick(digits)}>
					{digits}
				</Button>
			))}
		</Wrap>
	);
};

export default Digits;
