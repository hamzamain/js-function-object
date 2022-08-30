function findLeapYear(years){
    let leapYear = [];
    for(let i=0; i<years.length; i++){
        let index =i;
        let year = years[index];
        if(year % 4 === 0){
            leapYear.push(year);
        }
    }
    return leapYear;
}
let array2 = [570, 630, 1780, 1920, 2034, 2210]
let array =[2016, 2022, 2024, 2096, 3090, 1820]
let result = findLeapYear(array2 );
console.log('those are leap year: ', result);