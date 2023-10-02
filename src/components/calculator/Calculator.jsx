import React from 'react';

import * as S from './Calculator.style';

import Display from '../display/Display';

const Calculator = () => {
	return (
		<S.Container>
			<S.CalculatorWrap>
				<Display />
			</S.CalculatorWrap>
		</S.Container>
	);
};

export default Calculator;
