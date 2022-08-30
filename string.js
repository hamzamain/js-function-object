let userName = 'blackPink';
let userInput = 'blackPinK';
userInput.toLocaleLowerCase();
if (userInput.toLowerCase === userName.toLowerCase){
    console.log('valid input');
}
else{
    console.log('invalid input')
}