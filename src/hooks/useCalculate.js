import { useState } from 'react';

import calculate from '../utils/calculate';
import conversion from '../utils/conversion';

const useCalculate = () => {
	const [stack, setStack] = useState(['0']);
	const [display, setDisplay] = useState('');
	const [operator, setOperator] = useState('');
	const [isAC, setIsAC] = useState(true);

	const _setDisplay = (value) => {
		setIsAC(false);
		if (isNaN(display) || display === '0') setDisplay('');
		setDisplay((prevState) => prevState + value);
	};

	const _setOperator = (value) => {
		const stackTemp = [...stack];
		if (value === '=') {
			if (stackTemp.length > 1) {
				stackTemp.push(display);
				const result = calculate(stackTemp);
				if (!isNaN(result)) setDisplay(result);
				else setDisplay('숫자 아님');
				setOperator('');
				setStack(['0']);
			}
		} else {
			if (stackTemp.length < 2) stackTemp.splice(-1);
			stackTemp.push(display);
			stackTemp.push(value);
			setDisplay('0');
			setStack(stackTemp);
		}
	};

	const setConversion = (type) => {
		switch (type) {
			case 'AC':
				resetAll();
				break;
			case 'C':
				if (!display) {
					const stackTemp = [...stack];
					stackTemp.splice(-1);
					setStack(stackTemp);
				} else setDisplay('0');
				setIsAC(true);
				break;
			default:
				setDisplay(conversion[type](parseFloat(display)));
				break;
		}
	};

	const resetAll = () => {
		setStack(['0']);
		setDisplay('');
		setOperator('');
		setIsAC(true);
	};

	const getLastDigits = () => {
		return [...stack].reverse().find((value) => !isNaN(value));
	};

	const getLastOperator = () => {
		return [...stack].reverse().find((value) => isNaN(value));
	};

	return {
		isAC,
		stack,
		display,
		setDisplay: _setDisplay,
		operator,
		setOperator: _setOperator,
		setConversion,
		getLastDigits,
		getLastOperator,
	};
};

export default useCalculate;
