function hrToMin(hour){
    const min = hour * 60;
    return min;
}
const myInput = 6;
const myMin = hrToMin(myInput);
console.log(myMin);