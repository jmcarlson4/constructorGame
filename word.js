var letter = require("./letter.js");
var fs = require("fs");

var wordsArray = ["santa", "elf", "snow", "presents"];
var words = wordsArray[Math.floor(Math.random() * wordsArray.length )];

function StartUp() {        
    words =wordsArray[Math.floor(Math.random() * wordsArray.length )];
     for (var i = 0; i < words.length; i++) {
        correctAnswerArr[i] = "_";
     };



module.exports = word;