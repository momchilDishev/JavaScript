var bread = [];
bread.age = 34;
bread.maxAge = 190;
bread.foodDailyAmount = 3;
bread.type = " slices of bread ";

var iceCream = [];
iceCream.age = 20;
iceCream.maxAge = 100;
iceCream.foodDailyAmount = 1;
iceCream.type = " cones of ice cream "

var avocado = [];
avocado.age = 15;
avocado.maxAge = 89;
avocado.foodDailyAmount = 0.5;
avocado.type = " pieces of avocado ";

function calcSupply(value) {
    var days = 365 * (value.maxAge - value.age)
    var amountPeriod = days * value.foodDailyAmount;
    return console.log(amountPeriod + value.type + "would be enough until I am " + value.maxAge + " years old.");
}

calcSupply(bread);
calcSupply(iceCream);
calcSupply(avocado);
