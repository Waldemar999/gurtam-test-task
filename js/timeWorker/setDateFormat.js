export default (utcMilliseconds, dateFormat) => {
	const dateFormats = [
		'dd.MM.yyyy HH:mm:ss',
		'yyyy-MM-dd HH:mm',
		'yyyy/MM/dd HH:mm:ss',
	];

	if (!dateFormats.includes(dateFormat)) {
		return console.error('Invalid date format');
	}

	const date = new Date(utcMilliseconds);
	const correctDate = new Date(utcMilliseconds + (date.getTimezoneOffset() * 60000));

	let currentMonth = correctDate.getMonth() + 1;
	let currentDate = correctDate.getDate();
	let currentHour = correctDate.getHours();
	let currentMinute = correctDate.getMinutes();
	let currentSecond = correctDate.getSeconds();

	if (currentMonth < 10) {
		currentMonth = '0' + currentMonth;
	}

	if (currentDate < 10) {
		currentDate = '0' + currentDate;
	}

	if (currentHour < 10) {
		currentHour = '0' + currentHour;
	}

	if (currentMinute < 10) {
		currentMinute = '0' + currentMinute;
	}

	if (currentSecond < 10) {
		currentSecond = '0' + currentSecond;
	}

	if (dateFormat === dateFormats[0]) {
		return correctDate.toLocaleString();
	} else if (dateFormat === dateFormats[1]) {
		return (`${
			correctDate.getFullYear()}-${
			currentMonth}-${
			currentDate} ${
			currentHour}:${
			currentMinute}`
		);
	} else if (dateFormat === dateFormats[2]) {
		return (`${
			correctDate.getFullYear()}/${
			currentMonth}/${
			currentDate} ${
			currentHour}:${
			currentMinute}:${
			currentSecond}`
		);
	}
}