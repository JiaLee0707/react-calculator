import React from 'react';

import { DefaultButton } from './Button.style';

const Button = ({ children, ...attribute }) => {
	return <DefaultButton {...attribute}>{children}</DefaultButton>;
};

export default Button;
