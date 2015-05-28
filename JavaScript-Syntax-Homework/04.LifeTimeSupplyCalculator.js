var age = 38;
var maxAge = 118;
var food = 'chocolate';
var foodPerDay = 0.5;

function calcSupply(age, maxAge, food, foodPerDay) {
    var agesLeft = maxAge - age;
    var days = agesLeft * 365;
    var amountOfFood = foodPerDay * days;
    return amountOfFood;
}

console.log(calcSupply(age, maxAge, food, foodPerDay) + "kg " + "of " + food + " would be enough until I am " + maxAge + " years old.");
