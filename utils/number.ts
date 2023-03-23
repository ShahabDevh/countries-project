export const formatToThreeDigit = (number: number) =>
	new Intl.NumberFormat().format(number);
