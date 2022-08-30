function toFarenhit(inputCelcius){
    let a = inputCelcius * 9;
    let b = a/5;
    let farenhit = b + 32;
    return farenhit;
}
let inputCelcius = 29;
let farenhitResult = toFarenhit(inputCelcius);
console.log(farenhitResult, 'degree farenhit');

function toCelcius(farenhit){
    let x = farenhit*5;
    let y = x/9;
    let Celcius = y - 32;
    let celciusInFixed = Celcius.toFixed(2);
    let flotedNumber = parseFloat(celciusInFixed);
    return flotedNumber;
}
let inputFarenhit = 98.5;
let CelciusResult = toCelcius(inputFarenhit);
console.log(CelciusResult, 'degree celcius')