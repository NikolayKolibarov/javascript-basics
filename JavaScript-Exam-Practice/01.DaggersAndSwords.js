function solve(input) {
    for (var index in input) {
        input[index] = Math.floor(input[index]);
    }

    console.log('<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>');
    for (var i = 0; i < input.length; i++) {
        var bladeAppType = '';
        var bladeType = '';
        if (input[i] <= 10) {
            continue;
        } else {
            if (input[i] % 5 == 1) {
                bladeAppType = 'blade';
            } else if (input[i] % 5 == 2 ) {
                bladeAppType = 'quite a blade';
            } else if (input[i] % 5 == 3) {
                bladeAppType = 'pants-scraper';
            } else if (input[i] % 5 == 4) {
                bladeAppType = 'frog-butcher';
            } else if (input[i] % 5 == 0) {
                bladeAppType = '*rap-poker';
            }
        }
        if (input[i] > 40) {
            bladeType = 'sword';
        } else {
            bladeType = 'dagger';
        }

        console.log('<tr><td>' + input[i] + '</td><td>' + bladeType + '</td><td>' + bladeAppType + '</td></tr>');

    }

    console.log('</tbody>\n</table>')
}



