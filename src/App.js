import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, getTheme } from './styles';

import Calculator from './components/calculator/Calculator';
import useTheme from './hooks/useTheme';

export const ThemeContext = createContext(null);

function App() {
	const { theme } = useTheme();
	const currentTheme = getTheme(theme);

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyles />
			<Calculator />
		</ThemeProvider>
	);
}

export default App;
