import { useState } from 'react';

const useTheme = () => {
	const [theme, setTheme] = useState(false);

	return {
		theme,
		setTheme,
	};
};

export default useTheme;
