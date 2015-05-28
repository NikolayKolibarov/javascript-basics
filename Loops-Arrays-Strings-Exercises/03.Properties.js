var profile = {name: 'Nikolay', age: 16, occupation: 'Student', university: 'Software University',
    food: ['Pork Steak', 'Chicken breasts', 'Salad', 'Cake'], drinks: ['Redbull', 'Pepsi', 'Orange Juice']};

function displayProperties(object) {
    var line = '';
    var properties = Object.keys(object);
    properties.sort();
    for(var index in properties) {
      line = line + properties[index] + '\n';
    }
    return line;
}

console.log(displayProperties(profile));

