export default (utcMilliseconds, timezone) => {
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

    if (timezone === timezones.central.name) {
        return (utcMilliseconds + timezones.central.utcMilliseconds);
    } else if (timezone === timezones.minsk.name) {
        return utcMilliseconds + timezones.minsk.utcMilliseconds;
    } else if (timezone === timezones.astana.name) {
        return utcMilliseconds + timezones.astana.utcMilliseconds;
    } else if (timezone === timezones.norfolk.name) {
        return utcMilliseconds + timezones.norfolk.utcMilliseconds;
    }
}