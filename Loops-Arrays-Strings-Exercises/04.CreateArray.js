var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var line = '';
function createArray(array) {
    for (var i = 0; i < array.length; i += 1) {
        line = line + (i * 5) + " ";
    }
    return line;
}

console.log(createArray(numberArray));
