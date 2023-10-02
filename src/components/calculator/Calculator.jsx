import React from 'react';

import * as S from './Calculator.style';

import Display from '../display/Display';
import Conversion from '../conversion/Conversion';
import Digits from '../digits/Digits';
import Operation from '../operations/Operation';

import useCalculate from '../../hooks/useCalculate';

export const CalculatorContext = React.createContext(null);

const Calculator = () => {
	const { result, setResult } = useCalculate();

	return (
		<CalculatorContext.Provider value={{ result, setResult }}>
			<S.Container>
				<S.CalculatorWrap>
					<Display />
					<S.Buttons>
						<Conversion />
						<Digits />
						<Operation />
					</S.Buttons>
				</S.CalculatorWrap>
			</S.Container>
		</CalculatorContext.Provider>
	);
};

export default Calculator;
