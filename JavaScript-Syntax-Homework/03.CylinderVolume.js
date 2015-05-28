var firstParameters = [2, 4];
var secondParameters = [5, 8];
var thirdParameters = [12, 3];
function calcCylinderVol(parametersArray) {
    var volume = Math.pow(parametersArray[0], 2) * parametersArray[1] * Math.PI;
    volume = volume.toFixed(3);
    return volume;
}

console.log(calcCylinderVol(firstParameters));
console.log(calcCylinderVol(secondParameters));
console.log(calcCylinderVol(thirdParameters));