import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from './styles';

import Calculator from './components/calculator/Calculator';

function App() {
	const currentTheme = theme();

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyles />
			<Calculator />
		</ThemeProvider>
	);
}

export default App;
