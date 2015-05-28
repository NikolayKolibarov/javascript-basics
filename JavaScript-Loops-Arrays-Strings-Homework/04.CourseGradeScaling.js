var input = [
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
];

function scoreModifier(obj) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].score = obj[i].score + (10 / 100) * obj[i].score;
        if (obj[i].score >= 100) {
            obj[i].hasPassed = true;
        } else {
            delete obj[i];
        }

    }
    return obj;
}

console.log(scoreModifier(input).sort( function( a, b ) {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();

    return a < b ? -1 : a > b ? 1 : 0;
}));
//console.log(scoreModifier(input));

