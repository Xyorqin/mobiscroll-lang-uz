let dayNamesMinUz = ['D', 'S', 'CH', 'P', 'J', 'SH', 'Y']
let dayNamesUz = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba']
let dayNamesShortUz = ['Du', 'Se', 'Chor', 'Pay', 'Ju', 'Shan', 'Yak']
let monthNamesUz = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr']
let monthNamesShortUz = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sent', 'Okt', 'Noy', 'Dek']

let mobiscrollConfig = {
    controls: ['calendar'],
    display: 'inline',
    selectSize: 1,
    dateFormat: 'YYYY-MM', // Format as year and month
    onCellClick: function (event, inst) {
        setTimeout(function () {
            let date = inst.__value;
            let month = date.getMonth() + 1;
            let year = date.getFullYear()
            document.getElementById('month-picker-year').value = year;
            document.getElementById('month-picker-month').value = month;

        }, 500);

    }
};

mobiscroll.setOptions({
    locale: mobiscroll.localeRu,
    theme: 'ios',
    themeVariant: 'light'
});

mobiscroll.datepicker('#demo-month-select', mobiscrollConfig);


