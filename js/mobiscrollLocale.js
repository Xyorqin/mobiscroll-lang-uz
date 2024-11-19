let dayNamesMinUz = ['D', 'S', 'CH', 'P', 'J', 'SH', 'Y']
let dayNamesUz = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba']
let dayNamesShortUz = ['Du', 'Se', 'Chor', 'Pay', 'Ju', 'Shan', 'Yak']
let monthNamesUz = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr']
let monthNamesShortUz = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sent', 'Okt', 'Noy', 'Dek']

let mobiscrollConfig = {
    controls: ['calendar'],
    select: 'preset-range',
    display: 'inline',
    firstSelectDay: 1,
    selectSize: 7,
    firstDay: 1,
    onCellClick: function (event, inst) {

        setTimeout(function () {
            let date = inst.value[0];
            const year = date.getFullYear();
            const startOfYear = new Date(year, 0, 1);
            const dayOfYear = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000) + 1);
            const weekNumber = Math.ceil(dayOfYear / 7);
            document.getElementById('week-picker').value = `${year}-W${weekNumber.toString().padStart(2, '0')}`;
        }, 500);
    }

}

if (typeof locale !== 'undefined' && locale === 'uz') {
    mobiscrollConfig.dayNamesMin = dayNamesMinUz
    mobiscrollConfig.dayNames = dayNamesUz
    mobiscrollConfig.dayNamesShort = dayNamesShortUz
    mobiscrollConfig.monthNames = monthNamesUz
    mobiscrollConfig.monthNamesShort = monthNamesShortUz
}

if (typeof isEdit !== 'undefined' && typeof weekString !== 'undefined' && isEdit) {

    mobiscrollConfig.onInit = function (event, inst) {

        const { weekStartDate, weekEndDate } = getWeekStartAndEnd(weekString);


        inst.setVal([weekStartDate, weekEndDate], true);

        document.getElementById('week-picker').value = weekString;
    }

    function getWeekStartAndEnd(weekString) {
        const [year, week] = weekString.split('-W').map(Number);
        const januaryFirst = new Date(year, 0, 1);
        const dayOfWeekJanuaryFirst = januaryFirst.getDay();
        const firstMondayOffset = (dayOfWeekJanuaryFirst <= 4 ? dayOfWeekJanuaryFirst - 1 : 7 - (dayOfWeekJanuaryFirst - 1));
        const weekStartDate = new Date(januaryFirst.getTime() + (week - 1) * 7 * 24 * 60 * 60 * 1000);
        weekStartDate.setDate(weekStartDate.getDate() - firstMondayOffset);
        const weekEndDate = new Date(weekStartDate);
        weekEndDate.setDate(weekStartDate.getDate() + 6);
        return { weekStartDate, weekEndDate };
    }
}

mobiscroll.setOptions({
    locale: mobiscroll.localeRu,
    theme: 'ios',
    themeVariant: 'light'
});

mobiscroll.datepicker('#demo-week-select', mobiscrollConfig);
