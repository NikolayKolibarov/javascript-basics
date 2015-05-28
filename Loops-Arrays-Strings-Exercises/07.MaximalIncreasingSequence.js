var randomArray = [3, 5, 4, 6, 1, 2, 3, 6, 10, 32];

function findMaxSequence(array) {
        var currentSequence = 1,
            longestSequence = 1,
            indexOfLongest;
        for (var i = 0; i < array.length; i++) {
            if (array[i] < array[i + 1]) {
                currentSequence++;
            } else {
                if (longestSequence < currentSequence) {
                    longestSequence = currentSequence;
                    indexOfLongest = i - currentSequence + 1;

                }
                currentSequence = 1;
            }
        }
        if (longestSequence < 2) {
            return 'no';
        }
        else {
            var result = array.slice(indexOfLongest, indexOfLongest + longestSequence);
            return result;
        }
}

console.log(findMaxSequence(randomArray));