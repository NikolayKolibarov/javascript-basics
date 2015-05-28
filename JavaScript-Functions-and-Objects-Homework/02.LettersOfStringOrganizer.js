var strInput = 'HelloWorld';
function createArray(str) {
    var charArray = [];
    for (var index in str) {
        charArray.push(str[index]);
    }
    return charArray;
}

function sortAlphabetically(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
}

function sortLetters(str, bool) {
    var temp = createArray(str);
    var output;
    if (bool == true) {
        temp.sort(sortAlphabetically);
        output = temp.join("");
        return "'" + output + "'";
    } else {
        temp.sort(sortAlphabetically);
        temp.reverse();
        output = temp.join("");
        return "'" + output + "'";
    }
}

console.log(sortLetters(strInput, true));
console.log(sortLetters(strInput, false));
