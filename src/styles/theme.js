import { css } from 'styled-components';
export const getTheme = (isApple = false) => {
	const size = {
		small: '576px',
		mobile: '768px',
		tablet: '992px',
		desktop: '1280px',
	};

	const device = {
		small: `@media only screen and (min-width: ${size.small})`,
		mobile: `@media only screen and (min-width: ${size.mobile})`,
		tablet: `@media only screen and (min-width: ${size.tablet})`,
		desktop: `@media only screen and (min-width: ${size.desktop})`,
	};

	const hanghaeplusColorData = {
		background: '#fff',
		mainColor: 'rgb(225, 49, 33)',
		title: 'rgb(55, 53, 48)',
		strawberry: 'rgb(250, 236, 236)',
	};

	const appleColorData = {
		background: '#fff',
		mainColor: '#72acff',
		subTitle: '#707070',
		placeholder: '#e0e0e0',
		placeholder2: '#bbbbbb',
		border: '#e2e2e2',
		border2: '#dcdcdc',
		darkGray: '#929292',
		gray: '#f0f0f0',
		lemon: '#fff2c4',
		melon: '#abde65',
		green: 'green',
		orange: '#fd9c06',
		sky: 'd8e6ff',
		blue: '#9fc0f8',
		pink: '#ffe0d8',
		tomato: 'f8b79f',
		activation: '#5e9bf5',
		title: '#46423e',
		bold: '#46423d',
		regular: '#dcdcdc',
		modal: '#33333355',
		saveDefault: '#fdfdfd',
	};

	const colorData = isApple ? appleColorData : hanghaeplusColorData;

	const color = new Proxy(colorData, {
		get: (target, prop) => {
			const invertHex = (hex) => {
				const invertedHex = (255 - parseInt(hex, 16)).toString(16);
				return invertedHex.length === 1 ? `0${invertedHex}` : invertedHex;
			};

			const getColor = (shortHex) => {
				if (shortHex.length !== 2 && shortHex.length !== 1) return null;

				if (isApple) {
					const inverted = invertHex(shortHex);
					return `#${inverted}${inverted}${inverted}`;
				}

				return `#${shortHex}${shortHex}${shortHex}`;
			};

			if (target[prop]) {
				return target[prop];
			}

			if (prop.startsWith('gray_')) {
				const hexPart = prop.split('_')[1];
				return getColor(hexPart);
			}

			return undefined;
		},
	});

	const common = {
		container: css`
			width: 100vw;
			height: 100vh;
			margin: auto 0;
			// ${device.mobile} {
			// 	width: calc(100vw - 28.4rem);
			// }
		`,
		flex(direction = 'row', align = 'center', justify = 'center') {
			return css`
				display: flex;
				flex-direction: ${direction};
				align-items: ${align};
				justify-content: ${justify};
			`;
		},
		wh(w = 'auto', h = w) {
			return css`
				width: ${w};
				height: ${h};
			`;
		},
	};

	return {
		device,
		color,
		common,
	};
};

export default getTheme;
