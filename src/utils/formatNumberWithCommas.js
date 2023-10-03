const formatNumberWithCommas = (number) => {
	return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export default formatNumberWithCommas;
