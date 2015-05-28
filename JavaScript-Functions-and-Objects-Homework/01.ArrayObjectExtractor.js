var input = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}];

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

function extractObjects(arr) {
    var output = [];
    for (var index in arr) {
        if (typeof arr[index] == "object") {
            if (!isArray(arr[index])) {
                output.push(arr[index]);
            }
        }
    }
    return output;
}

console.log(extractObjects(input));


