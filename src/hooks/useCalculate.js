import { useState } from 'react';

import { calculate } from '../utils/calculate';
import { conversion } from '../utils/conversion';

const useCalculate = () => {
	const [prevNumber, setPrevNumber] = useState('0');
	const [display, setDisplay] = useState('');
	const [operator, setOperator] = useState('');
	const [isAC, setIsAC] = useState(true);

	const _setDisplay = (value) => {
		setIsAC(false);
		if (isNaN(display) || display === '0') setDisplay('');
		setDisplay((prevState) => prevState + value);
	};

	const _setOperator = (value) => {
		if (value === '=') {
			const isCalculate = prevNumber && display && operator;
			if (isCalculate) {
				const result = calculate[operator](
					parseFloat(prevNumber),
					parseFloat(display),
				);
				if (!isNaN(result)) setDisplay(result);
				else setDisplay('숫자 아님');
				setOperator('');
			}
		} else {
			if (display) setPrevNumber(display);
			setDisplay('');
			setOperator(value);
		}
	};

	const setConversion = (type) => {
		switch (type) {
			case 'AC':
				resetAll();
				break;
			case 'C':
				if (!display && operator) setOperator('');
				else setDisplay('0');
				setIsAC(true);
				break;
			default:
				setDisplay(conversion[type](parseFloat(display)));
				break;
		}
	};

	const resetAll = () => {
		setPrevNumber('0');
		setDisplay('');
		setOperator('');
		setIsAC(true);
	};

	return {
		isAC,
		prevNumber,
		display,
		operator,
		setConversion,
		setDisplay: _setDisplay,
		setOperator: _setOperator,
	};
};

export default useCalculate;
