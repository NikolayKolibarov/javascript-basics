var inputString = "<ul><li><a href=http://softuni.bg>SoftUni</a><a href=http://softuni.bg>SoftUni</a></li></ul>";

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};
/*For just one <a> tag. */
/*function replacATag(str) {
    var output = str.replace("<a href=", "[URL href=");
    output = output.replace("</a>", "[/URL]");
    var tagFinder = output.indexOf(">", 15);
    output = output.replaceAt(tagFinder,"]");
    return output;
} */

function replaceATag(str) {
    var counter = 0;
    var index = str.indexOf("<a");
    while(index != -1) {
        str = str.replace("<a href=", "[URL href=")
            .replace("</a>", "[/URL]");
        var tagFinder = str.indexOf(">", index);
        str = str.replaceAt(tagFinder,"]");
        index = str.indexOf("<a");
    }
    return str;
}



console.log(replaceATag(inputString));