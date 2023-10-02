import React from 'react';

import Button from '../common/button/Button';

import { Wrap, ConversionButton } from './Conversion.style';

const CONVERSIONS = ['AC', '+/-', '%'];

const Conversion = () => {
	return (
		<Wrap>
			{CONVERSIONS.map((conversion, index) => (
				<Button key={index} $custom={ConversionButton}>
					{conversion}
				</Button>
			))}
		</Wrap>
	);
};

export default Conversion;
