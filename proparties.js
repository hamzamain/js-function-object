shopingCart = {
    books: 5,
    sungrass: 5,
    keyboard: 5, 
    mouse: 1, 
    pen: 24
}

// when you know the spesific proparti name and want to know the value 
var pencount = shopingCart.pen;
//alternative 
var pencount2 = shopingCart["pen"];
console.log(pencount2);
var proparties = Object.values(shopingCart);
console.log(proparties);

var num1 = 'pen'
console.log(shopingCart[num1]);

console.log(shopingCart);