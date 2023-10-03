import { useState } from 'react';

const useTheme = () => {
	const [theme, setTheme] = useState(true);
	// false: hanghaeplus-coyukdae
	// true: macOS

	return {
		theme,
		setTheme,
	};
};

export default useTheme;
