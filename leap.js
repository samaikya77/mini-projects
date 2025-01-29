function checkLeapYear(year) {

    var leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + 'It is a leap year');
    } else {
        console.log(year + 'It is not a leap year');
    }
}
var year = 2015
checkLeapYear(year);