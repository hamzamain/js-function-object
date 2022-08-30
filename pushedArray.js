//7*6*5*4*3*2*1
//7+6+5+43+2+1
/* function factorial(number){
    let sum = 1;
for(let i= 1; i<=number; i++){
    sum *= i;
    console.log(sum,i);
}
return sum;
}
let myFactorial = factorial(7);
console.log(myFactorial); */

function factorial(number){
    let multi= 1;
    for(let i = 1; i <= number; i++){
        multi *= i;
    }
    console.log(multi);
    return multi;
}
let hello =factorial(7);
console.log(hello)