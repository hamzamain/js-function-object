function bringShinggara(money){
    shinggaraPrice =10;
    quantity = money / shinggaraPrice;
    return quantity;
    console.log(quantity);
}

var myTaka = 150;
var shinggaras = bringShinggara(myTaka);
console.log('shingaras i eat', shinggaras);