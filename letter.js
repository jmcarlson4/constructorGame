var inquirer = require("inquirer");
var fs = require("fs");

var lettersGuessed = [];

function Letters(spaces, letter) {
    this.spaces = "_";

    this.letter = letter;

    if (letter === lettersGuessed) {
        this.letter;
    }
    else (letter !== lettersGuessed) {
        this.spaces;
    }

};






module.exports = letter;