import setDateFormat from './setDateFormat.js';
import setTimezone from './setTimezone.js';

export default async () => {
	const req = await fetch('http://date.jsontest.com./');

	if (req.ok) {
		const timeOutput = document.querySelector('#time-output');
		const res = await req.json();
		const utcMilliseconds = res.milliseconds_since_epoch;

		const selectedDateFormat = document.querySelector('#date-format > option:checked').value;
		const selectedTimezone = document.querySelector('#timezone > option:checked').value;

		timeOutput.innerHTML = setDateFormat(
			setTimezone(utcMilliseconds, selectedTimezone),
			selectedDateFormat
		);
	} else {
		console.error('Request error');
	}
};
