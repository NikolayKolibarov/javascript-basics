"use strict";
var a  = prompt('Enter number a: ');
var b = prompt('Enter number b');
var c = prompt('Enter number c');

var discriminant = parseFloat(Math.pow(b, 2) - 4 * a * c);

if (discriminant == 0) {
    var x = (-b + Math.sqrt(discriminant)) / (2 * a);
    alert(parseFloat(x));
}

if (discriminant > 0) {
    var firstX = (-b + Math.sqrt(discriminant)) / (2 * a);
    var secondX =  (-b - Math.sqrt(discriminant)) / (2 * a);
    alert("x1 = " + parseFloat(firstX) + "\nx2 = " + parseFloat(secondX));
}

if (discriminant < 0) {
    alert('No real roots');
}