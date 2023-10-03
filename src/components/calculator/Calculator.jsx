import React, { createContext } from 'react';

import * as S from './Calculator.style';

// import Toggle from '../toggle/Toggle';
import Display from '../display/Display';
import Conversion from '../conversion/Conversion';
import Digits from '../digits/Digits';
import Operators from '../operators/Operators';

import useCalculate from '../../hooks/useCalculate';

export const CalculatorContext = createContext(null);

const Calculator = () => {
	const calculate = useCalculate();

	return (
		<CalculatorContext.Provider value={calculate}>
			<S.Container>
				{/*<Toggle />*/}
				<S.CalculatorWrap>
					<Display />
					<S.Buttons>
						<Conversion />
						<Digits />
						<Operators />
					</S.Buttons>
				</S.CalculatorWrap>
			</S.Container>
		</CalculatorContext.Provider>
	);
};

export default Calculator;
