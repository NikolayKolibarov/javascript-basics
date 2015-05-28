var randomArray = [2, 'qwe', 'qwe', 3, 3, '3'];

function findMaxSequence(array) {
    var currentSequence = 1;
    var longestSequence = 1;
    var maxValue = array[0] ;
    var output = [];
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

    for (var i = 0; i < longestSequence; i++) {
         output.push(maxValue);
    }
    return output;
}

console.log(findMaxSequence(randomArray));
