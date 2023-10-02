import React, { useContext, useEffect, useState } from 'react';

import Button from '../common/button/Button';

import { Wrap, ConversionButton } from './Conversion.style';

import { CalculatorContext } from '../calculator/Calculator';
import { CONVERSIONS } from '../../constants/Conversions';

// eslint-disable-next-line no-unused-vars
const { AC, C, ...CONVERSIONS_LIST } = CONVERSIONS;

const Conversion = () => {
	const { isAC, setConversion } = useContext(CalculatorContext);
	const [conversions, setConversionList] = useState({ AC, ...CONVERSIONS_LIST });

	useEffect(() => {
		if (isAC) setConversionList({ AC, ...CONVERSIONS_LIST });
		else setConversionList({ C, ...CONVERSIONS_LIST });
	}, [isAC]);

	return (
		<Wrap>
			{Object.keys(conversions).map((conversion, index) => (
				<Button
					key={index}
					title={CONVERSIONS[conversion]}
					$custom={ConversionButton}
					onClick={() => setConversion(conversion)}>
					{conversion}
				</Button>
			))}
		</Wrap>
	);
};

export default Conversion;
