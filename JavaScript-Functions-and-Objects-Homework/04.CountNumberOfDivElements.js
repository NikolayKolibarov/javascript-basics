var inputStr = '<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>index</title> <script src="/yourScript.js" defer></script></head><body><div id="outerDiv"><div class="first"><div><div>hello</div></div> </div> <div>hi<div></div></div> <div>I am a div</div> </div> </body> </html>';

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

function countDivs(str) {
    var counter = 0;
    var index = str.indexOf("<div");
    while(index != -1) {
        counter += 1;
        str = str.replace("<div");
        index = str.indexOf("<div");
    }
    return counter;
}

console.log(countDivs(inputStr));