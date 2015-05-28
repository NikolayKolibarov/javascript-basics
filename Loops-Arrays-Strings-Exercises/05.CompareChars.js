var firstCharArray = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
var secondCharArray = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];

function compareChars(arr1, arr2) {
    var counter = 0;
    var isEqual = false;
    var equalStr;
    for (var i = 0; i < arr1.length; i += 1) {
        for (var j = 0; j < arr2.length; j += 1) {
            if (i != j) {
                continue;
            }
             else if (arr1[i] == arr2[j]) {
                    counter += 1;

                if (counter == arr2.length) {
                    isEqual = true;
                }
            }

        }

    }
    if (isEqual == true) {
        var equalStr = 'Equal';
    } else {
        var equalStr = 'Not Equal';
    }
    return equalStr;
}

console.log(compareChars(firstCharArray, secondCharArray));
