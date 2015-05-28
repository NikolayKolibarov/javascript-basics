function solve(arr) {
    var alive = [];
    var fans = [];
    var haters = [];
    var biggestFan, biggestHater;
    for (var i in arr) {
        var currentDateData = arr[i].split('.');
        var currentDate = new Date(currentDateData[2], currentDateData[1] - 1, currentDateData[0]);
        debugger;
        if (currentDate <= new Date(1900,0,1) || currentDate >= new Date(2015,0,1)) {
            continue;
        }

        alive.push(currentDate);
    }
    if (alive.length == 0) {
        console.log('No result');
    } else {
        for (var i in alive) {
            if (alive[i] >= new Date(1973,04,25)) {
                fans.push(alive[i]);
            } else {
                haters.push(alive[i]);
            }
        }
        if (fans.length > 0) {
            biggestFan = fans[0];

            for (var i = 1; i < fans.length; i++) {
                if (fans[i] > biggestFan) {
                    biggestFan = fans[i];
                }
            }
            console.log('The biggest fan of ewoks was born on ' + biggestFan.toDateString());
        }

        if (haters.length > 0) {
            biggestHater = haters[0];
            for (var i = 1; i < haters.length; i++) {
                if (haters[i] < biggestHater) {
                    biggestHater = haters[i];
                }
            }
            console.log('The biggest hater of ewoks was born on ' + biggestHater.toDateString());
        }

    }
}

var input = ['22.03.2014', '17.05.1933', '10.10.1954'];

solve(input);