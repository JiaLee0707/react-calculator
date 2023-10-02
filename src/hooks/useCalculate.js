import { useState } from 'react';

const useCalculate = () => {
	const [result, setResult] = useState(null);
	// const [status, setStatus] = useState(null);

	// const onClick = (number) => {
	// 	setResult();
	// };

	return {
		result,
		setResult,
	};
};

export default useCalculate;
