import React from 'react';

import { Circle, Logo, ToggleButton } from './Toggle.style';

import HanghaeplusImage from '../../assets/image/hanghaeplus.png';
// import AppleImage from '../../assets/image/apple.png';

const Toggle = () => {
	return (
		<ToggleButton>
			<Circle />
			<Logo src={HanghaeplusImage} />
			{/*<Logo src={AppleImage} />*/}
		</ToggleButton>
	);
};

export default Toggle;
