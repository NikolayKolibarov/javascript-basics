var numbers = [500, 1, -23, 0, -300, 28, 35, 12];

function sortNumber(a,b) {
    return a - b;
}

function findMinAndMax(numberArray) {
    numberArray.sort(sortNumber);
    return ('Min -> ' + numberArray[0] + "\nMax -> " + numberArray[numberArray.length - 1]);
}

console.log(findMinAndMax(numbers));