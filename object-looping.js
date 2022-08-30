var shopingCart = {
    books: 2,
    sunglases: 3,
    keyboard: 4,
    mouse: 1,
    pen: 40,
    shoes: 2
}
var entries = Object.entries(shopingCart);
console.log(entries);
// console.log(shopingCart);

const keys = Object.keys(shopingCart);
const values = Object.values(shopingCart);

/* for(var i = 0; i<keys.length; i++){
    var propartisName = keys[i];
    var propartiesValue = values[i];
    console.log(propartisName, propartiesValue);
} */
var propartiesName = keys[1];
for(var propartiesName in shopingCart){
    // console.log(propartiesNam)
}