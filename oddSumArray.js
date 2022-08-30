const oddarray = [];
function findOdds(array){
    for(let i=0; i< array.length; i++){
        let index = i;
        let element =array[index];
        if(element % 2 !== 0){
            // console.log(index, element);
            oddarray.push(element);
        }
    }
    return oddarray;
}
//sum function
function sumArrayNumber(array){
    var sum = 0;
    for(let i = 0; i< array.length; i++){
        let index = i;
    let element = array[index];
        var sum = sum + element;
        // console.log(index, sum);
    }
return sum;
}
array =[12, 25, 23, 67, 59, 82, 121, 500];
let odds = findOdds(array);
let oddSum = sumArrayNumber(odds);
console.log(oddSum);
console.log(odds);
console.log(sumArrayNumber(array));