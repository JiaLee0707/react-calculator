import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, getTheme } from './styles';

import Calculator from './components/calculator/Calculator';
import useCalculate from './hooks/useCalculate';

export const ThemeContext = createContext(null);

function App() {
	const { theme } = useCalculate();
	const currentTheme = getTheme(theme);

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyles />
			<Calculator />
		</ThemeProvider>
	);
}

export default App;
