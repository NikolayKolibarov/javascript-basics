var input = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];

function filterNumbers(array) {
    var filteredArray = array.filter(function (el) {
        return !isNaN(parseFloat(el)) && isFinite(el);
    });
    return filteredArray;
}

function sortNumbers(a,b) {
    return a - b;
}

function findMinAndMax(numberArray) {
    numberArray.sort(sortNumbers);
    return ('Min number: ' + numberArray[0] + "\nMax number: " + numberArray[numberArray.length - 1]);
}

function sortInDescendingOrder(numberArray) {
    numberArray.sort(sortNumbers);
    return numberArray.reverse();
}

function findMostFrequentNumber(array) {
    var currentSequence = 1;
    var longestSequence = 1;
    var maxValue = array[0] ;
    for (var i = 1; i < array.length; i++) {

        if (array[i-1] === array[i]) {
            currentSequence += 1;
            if (currentSequence >= longestSequence) {
                longestSequence = currentSequence;
                maxValue = array[i];
            }

        } else {
            currentSequence = 1;
        }
    }
    return ('Most frequent number: ' + maxValue);
}

var filteredArray = filterNumbers(input);
console.log(findMinAndMax(filteredArray));
console.log(findMostFrequentNumber(filteredArray));
console.log(sortInDescendingOrder(filteredArray));

