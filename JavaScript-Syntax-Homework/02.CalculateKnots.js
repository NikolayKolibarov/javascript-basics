var number = 400;
function kilometersToKnots (kilometers) {
    var knots = parseFloat(kilometers * 0.53996, 2);
    knots = knots.toFixed(2);
    return knots;
}

console.log(kilometersToKnots(number));