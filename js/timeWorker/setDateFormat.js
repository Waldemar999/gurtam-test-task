export default (utcMilliseconds, dateFormat) => {
	const dateFormats = [
		'dd.MM.yyyy HH:mm:ss',
		'yyyy-MM-dd HH:mm',
		'yyyy/MM/dd HH:mm:ss',
	];

	if (!dateFormats.includes(dateFormat)) {
		return console.error('Invalid date format');
	}

	const timezoneOffset = new Date(utcMilliseconds).getTimezoneOffset() * 60000;
	const date = new Date(utcMilliseconds + timezoneOffset);

	let currentMonth = date.getMonth() + 1;
	let currentDate = date.getDate();
	let currentHour = date.getHours();
	let currentMinute = date.getMinutes();
	let currentSecond = date.getSeconds();

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
		return date.toLocaleString();
	} else if (dateFormat === dateFormats[1]) {
		return (`${
			date.getFullYear()}-${
			currentMonth}-${
			currentDate} ${
			currentHour}:${
			currentMinute}`
		);
	} else if (dateFormat === dateFormats[2]) {
		return (`${
			date.getFullYear()}/${
			currentMonth}/${
			currentDate} ${
			currentHour}:${
			currentMinute}:${
			currentSecond}`
		);
	}
}