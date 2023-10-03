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

		// display의 현재 값이 초기값(0) 또는 숫자가 아닐 때
		// ''으로 초기화
		if (isNaN(display) || display === '0') {
			setDisplay('');
		}
		const nextState = display + value;
		if (nextState.length <= 10) setDisplay((prevState) => prevState + value);
	};

	const _setOperator = (value) => {
		const stackTemp = [...stack];
		if (value === '=') {
			if (stackTemp.length > 1) {
				// 마지막에 입력한 숫자 추가
				stackTemp.push(display);
				const result = calculate(stackTemp);
				if (!isNaN(result)) {
					if (result.toString().length > 10) {
						// 연산 결과가 10자리 숫자를 넘어갈 때
						setDisplay('∞');
					} else {
						// 연산 결과 정상
						setDisplay(result);
					}
				} else {
					// 연산 결과가 숫자가 아닐 때
					setDisplay('숫자 아님');
				}
				setOperator('');
				setStack(['0']);
			}
		} else {
			if (stackTemp.length < 2) stackTemp.splice(-1);
			stackTemp.push(display);
			stackTemp.push(value);
			// setDisplay('');
			setDisplay(value);
			setStack(stackTemp);
		}
	};

	const setConversion = (type) => {
		switch (type) {
			case 'AC': // 모두 지우기
				resetAll();
				break;
			case 'C': // 마지막에 입력한 값만 지우기
				if (!display) {
					// 연산자일 때
					const stackTemp = [...stack];
					stackTemp.splice(-1);
					setStack(stackTemp);
				} else {
					// 슷자일 때
					setDisplay('0');
				}

				// 한번 더 누르면 모두 지울 수 있도록
				// 조건 변경: C -> AC
				setIsAC(true);
				break;
			default:
				if (display) setDisplay(conversion[type](parseFloat(display)));
				// if (display) setDisplay(conversion[type](parseInt(display)));
				break;
		}
	};

	// 모두 지우기
	const resetAll = () => {
		setStack(['0']);
		setDisplay('');
		setOperator('');
		setIsAC(true);
	};

	// 마지막에 입력한 숫자
	const getLastDigits = () => {
		return [...stack].reverse().find((value) => !isNaN(value));
	};

	// 마지막에 입력한 연산자
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
