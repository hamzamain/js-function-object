function isOdd(age){
   var reminder = age % 2;
    if(reminder === 0){
        return false;
    }
    else{
        return true;
    }
}
const myAge = 22;
var isMyAgeOdd = isOdd(myAge);
console.log(isMyAgeOdd);