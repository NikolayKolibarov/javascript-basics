function solve(arr) {
    var matrixOfSymbols = [];
    var shapeIndexes = [];
    for (var i in arr) {
        matrixOfSymbols.push(arr[i].split(''));
    }
    console.log(matrixOfSymbols);
    return;

    for (var row = 0; row < matrixOfSymbols.length; row++) {
        for (var col = 1; col < matrixOfSymbols[row].length; col++) {
            var symbol = matrixOfSymbols[row][col].toLowerCase();
            if (!matrixOfSymbols[row + 1] || !matrixOfSymbols[row + 2]) {
                continue;
            }
            if (matrixOfSymbols[row + 1].length < col + 2 || matrixOfSymbols[row + 2].length <= col) {
                continue;
            }
            if (matrixOfSymbols[row + 1][col].toLowerCase() == symbol && matrixOfSymbols[row + 2][col].toLowerCase() == symbol && matrixOfSymbols[row + 1][col - 1].toLowerCase() == symbol && matrixOfSymbols[row + 1][col + 1].toLowerCase() == symbol) {
                shapeIndexes.push({row: row, col: col});
            }
        }
    }
    for (var index in shapeIndexes) {
        var row = shapeIndexes[index].row;
        var col = shapeIndexes[index].col;
        matrixOfSymbols[row][col] = -1;
        matrixOfSymbols[row + 1][col] = -1;
        matrixOfSymbols[row + 2][col] = -1;
        matrixOfSymbols[row + 1][col - 1] = -1;
        matrixOfSymbols[row + 1][col + 1] = -1;
    }
    result = '';
    for (var i = 0; i < matrixOfSymbols.length; i++) {
        for (var j = 0; j < matrixOfSymbols[i].length; j++) {
            if(matrixOfSymbols[i][j] == '-1'){
                continue;
            }
            result += matrixOfSymbols[i][j];
        }
        result += '\n';
    }

    console.log(result);
}

var input = [
    '****************',
    '****************',
    '****************',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    '0o0o0ooOOO0o0o)O0o0o0o0o0o',
    'o0o0o0o0o0o0o0o0oo0o00Ooo0',
    'o0o0oOOOOooo0o0o00o0o000ooo',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    '****************',
    '****************',
    '****************',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    '0o0o0ooOOO0o0o)O0o0o0o0o0o',
    'o0o0o0o0o0o0o0o0oo0o00Ooo0',
    'o0o0oOOOOooo0o0o00o0o000ooo',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    '****************',
    '****************',
    '****************',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    '0o0o0ooOOO0o0o)O0o0o0o0o0o',
    'o0o0o0o0o0o0o0o0oo0o00Ooo0',
    'o0o0oOOOOooo0o0o00o0o000ooo',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    '****************',
    '****************',
    '****************',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    '0o0o0ooOOO0o0o)O0o0o0o0o0o',
    'o0o0o0o0o0o0o0o0oo0o00Ooo0',
    'o0o0oOOOOooo0o0o00o0o000ooo',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    '****************',
    '****************',
    '****************',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    'dDDDddDdDDddDDDDDDDDDdDDD',
    '0o0o0ooOOO0o0o)O0o0o0o0o0o',
    'o0o0o0o0o0o0o0o0oo0o00Ooo0',
    'o0o0oOOOOooo0o0o00o0o000ooo',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'bBbbbBBbbbBBbbbbBbbBbBbbBBB',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee',
    'eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee'

];

solve(input);