function sumArray(array){
    let sum = 0;
    for(let i = array.length-1; i >= 0; i--){
        let index = i;
        let element = array[index];
        sum += element;
        console.log(sum,i);
    }
    return sum;
}
let array = [25, 30, 55, 62, 60, 33, 121, 22, 56]
let result = sumArray(array);
console.log(result);

function evenNum(array){
    let evenarray =[];
    for(var i= array.length-1; i>= 0; i--){
    let evenIndex = i;
    let evenElement = array[i];
        if(evenElement % 2 !== 1){
            evenarray.push(evenElement);
        }
    }
    return evenarray;
}
let evenArrayInput = evenNum(array);
console.log(evenArrayInput);
// console.log(sumArray(evenNum));
let evensum = sumArray(evenArrayInput);
console.log(evensum);