export default (utcMilliseconds, selectedTimezone) => {
    const timezones = {
        central: {
            name: '(-06:00) Центральное время (США и Канада), Мехико',
            utcMilliseconds: -(360 * 60 * 1000),
        },
        minsk: {
            name: '(+03:00) Минск, Багдад, Москва, Санкт-Петербург, Волгоград',
            utcMilliseconds: (180 * 60 * 1000),
        },
        astana: {
            name: '(+06:00) Астана, Дакка, Омск',
            utcMilliseconds: (360 * 60 * 1000),
        },
        norfolk: {
            name: '(+11:30) Остров Норфолк (Австралия)',
            utcMilliseconds: (690 * 60 * 1000),
        },
    }

    for (const timezone of Object.values(timezones)) {
        if (selectedTimezone === timezone.name) {
            return utcMilliseconds + timezone.utcMilliseconds;
        }
    }
}