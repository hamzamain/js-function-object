array =[35, 52, 20, 80, 90, 33];
let num1 = array[0];
let num2 = array[1];
let num3 = array[2];
// let num4 = array[3];
// let num5 = array[4];
// let num6 = array[5];
if(num1 < num2){
    if(num1 < num3){
        console.log('this is the smallest number in the array: ',num1);
    }
    else if(num2 < num3) {
        console.log('this is the smallest number in the array: ', num2);
    }
    else{
        console.log('this is the smallest number in the array: ', num3);
    }
}