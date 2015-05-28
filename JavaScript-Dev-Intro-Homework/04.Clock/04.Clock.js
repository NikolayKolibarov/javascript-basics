function startTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
    var time = setTimeout(function(){startTime()}, 500);
}

function checkTime (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}