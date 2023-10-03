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
		background: 'rgb(250, 236, 236)',
		calculator: 'rgba(253, 249, 244, 0.95)',
		mainColor: 'rgb(225, 49, 33)',
		title: 'rgb(55, 53, 48)',
	};

	const appleColorData = {
		background: '#fff',
		calculator: 'rgba(89, 83, 81, 0.95)',
		mainColor: '#72acff',
		title: 'rgb(227, 225, 225)',
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
