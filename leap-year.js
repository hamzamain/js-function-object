function isLeapYear(year){
    var confirmation = year % 4;
    if (confirmation === 0 ){
        console.log('this year is leap year');
        return true;
    }
    else{
        console.log('this year is not leap year');
        return false
    }
}
var years = isLeapYear(2022);
console.log(years);