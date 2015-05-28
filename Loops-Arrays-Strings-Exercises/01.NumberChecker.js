var n = 20;


function printNumers(number) {
    var line = '';
    if (number <= 0) {
        console.log('no');
    }
    for (var i = 1; i <= number; i += 1) {
        if (!(i % 4 == 0) && !(i % 5 == 0)) {
            line = line + i + ' ';
        }
    }
    return line;
}

console.log(printNumers(n));