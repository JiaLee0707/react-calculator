import React from 'react';

import { DefaultButton } from './Button.style';

const Button = ({ custom, children }) => {
	return <DefaultButton {...custom}>{children}</DefaultButton>;
};

export default Button;
