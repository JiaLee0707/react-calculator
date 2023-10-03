import React, { useCallback, useContext } from 'react';

import Button from '../common/button/Button';

import { Wrap, OperationsButton } from './Operators.style';

import { OPERATORS } from '../../constants/Operators';
import { MESSAGE } from '../../constants/Message';

import { CalculatorContext } from '../calculator/Calculator';

const Operators = () => {
	const { display, getLastOperator, setOperator } =
		useContext(CalculatorContext);

	const onClick = useCallback(
		(operator) => {
			if (display === '' && operator === '=') alert(MESSAGE.NOT_NUMBER);
			else setOperator(operator);
		},
		[display],
	);

	return (
		<Wrap>
			{Object.keys(OPERATORS).map((operator, index) => (
				<Button
					key={index}
					title={OPERATORS[operator]}
					$custom={OperationsButton}
					$isOperator={getLastOperator() === operator}
					onClick={() => onClick(operator)}>
					{operator}
				</Button>
			))}
		</Wrap>
	);
};

export default Operators;
