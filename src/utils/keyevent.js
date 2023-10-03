import { calculate } from './calculate';
export const keyevent = (event, useCalculate) => {
	console.log(event.key);
	if (event.key === 'Enter') {
		useCalculate.setOperator('=');
	} else if (event.key === 'Escape') {
		useCalculate.setConversion(calculate.isAC ? 'AC' : 'C');
	} else if (event.altKey && event.key === '–') {
		event.preventDefault(); // 이 부분이 이벤트의 기본 동작을 막습니다.
		useCalculate.setConversion('+/-');
	} else if (event.key === '%') {
		useCalculate.setConversion(event.key);
	} else if (event.key === '*') {
		useCalculate.setOperator('x');
	} else if (event.key in calculate) {
		useCalculate.setOperator(event.key);
	} else if (!isNaN(event.key)) {
		useCalculate.setDisplay(event.key);
	}
};
