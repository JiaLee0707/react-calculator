const calculate = {
	'÷': (a, b) => a / b,
	x: (a, b) => a * b,
	'-': (a, b) => a - b,
	'+': (a, b) => a + b,
};

const getPrecedence = (operator) => {
	if (operator === 'x' || operator === '÷') return 2;
	if (operator === '+' || operator === '-') return 1;
	return 0; // 괄호는 가장 높은 우선순위를 갖음 (현재 괄호는 존재하지 않음)
};

const sortExpression = (expression) => {
	const output = [];
	const operators = [];

	for (const token of expression) {
		if (!(token in calculate)) {
			output.push(parseFloat(token));
		} else {
			while (
				operators.length > 0 &&
				getPrecedence(operators[operators.length - 1]) >= getPrecedence(token)
			) {
				output.push(operators.pop());
			}
			operators.push(token);
		}
	}

	while (operators.length > 0) {
		output.push(operators.pop());
	}

	return output;
};

const evaluateExpression = (parsedExpression) => {
	const stack = [];

	for (let token of parsedExpression) {
		if (!(token in calculate)) {
			stack.push(token);
		} else {
			const num2 = stack.pop();
			const num1 = stack.pop();
			const result = calculate[token](num1, num2);
			stack.push(result);
		}
	}

	return stack[0];
};

const calculateExpression = (expression) => {
	const parsedExpression = sortExpression(expression);
	return evaluateExpression(parsedExpression);
};

export default calculateExpression;
