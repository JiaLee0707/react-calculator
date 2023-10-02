import React, { useContext } from 'react';

import Button from '../common/button/Button';

import { Wrap, OperationsButton } from './Operators.style';

import { OPERATORS } from '../../constants/Operators';
import { CalculatorContext } from '../calculator/Calculator';

const Operators = () => {
	const { operator: isOperator, setOperator } = useContext(CalculatorContext);

	return (
		<Wrap>
			{Object.keys(OPERATORS).map((operator, index) => (
				<Button
					key={index}
					title={OPERATORS[operator]}
					$custom={OperationsButton}
					$isOperator={isOperator === operator}
					onClick={() => setOperator(operator)}>
					{operator}
				</Button>
			))}
		</Wrap>
	);
};

export default Operators;
