import React from 'react';

import Button from '../common/button/Button';

import { Wrap, OperationsButton } from './Operation.style';

const OPERATIONS = ['÷', 'x', '-', '+', '='];

const Operation = () => {
	return (
		<Wrap>
			{OPERATIONS.map((operation, index) => (
				<Button key={index} $custom={OperationsButton}>
					{operation}
				</Button>
			))}
		</Wrap>
	);
};

export default Operation;
