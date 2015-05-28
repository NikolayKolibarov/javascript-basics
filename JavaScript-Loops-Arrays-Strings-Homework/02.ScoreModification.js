var inputArray = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

function filterScore(array) {
    var filteredArray = array.filter(function (el) {
        return parseFloat(el) >= 0 && parseFloat(el) <= 400;
    });
    return filteredArray;
}

function modificateArray(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] - ((20 / 100) * array[i]);
    }
    return array;
}

function sortNumbers(a,b) {
    return a - b;
}

filteredArray = filterScore(inputArray);
var modificatedArray = modificateArray(filteredArray);
console.log(modificatedArray.sort(sortNumbers));