//problem 1
/* function foo(){
    console.log('foo');
    bar();
}
function bar(){
    console.log('bar');
}
foo(); */
// problem 2
/* function makeAvarege(number1, number2, number3){

        let sum = number1 + number2 + number3;
        let avg = sum / 3;
        let avag = avg.toFixed(1);
        let avarege = parseFloat(avag);
        return avarege;
}
let number1 = 12;
let number2 = 15;
let number3 = 13;
let myAvarege = makeAvarege(number1, number2, number3);
console.log(myAvarege); */
//problem 3
/* var nums = [13, 22, 31, 50, 55, 60]
var num1 = nums[0];
var num2 = nums[1];
var num3 = nums[2];
var num4 = nums[3];
var num5 = nums[4];
var num6 = nums[5];
function makeAvarege(num1 , num2 , num3 , num4 , num5 , num6){
    var sum = num1 + num2 + num3 + num4 + num5 + num6;
    var avarege = sum / nums.length;
    return avarege;
}
var myAvarege = makeAvarege(num1, num2, num3, num4, num5, num6);
console.log(myAvarege); */
//problem 4
//______________________________
/* has paramiter no return */
//______________________________
/* 
function odd_even(num){
    var reminder = num % 2;
if(reminder === 0){
    console.log('this is a Even number');
}
else{
    console.log('this is a Odd number')
}
} */
// odd_even(35);

function odd_even(num){
    reminder = num % 2;
    switch(reminder){
        case 0:
            console.log('this is a even number');
            break;
        default:
            console.log('this is a odd number');
    }
    return reminder;
}
odd_even(55);
console.log(reminder);