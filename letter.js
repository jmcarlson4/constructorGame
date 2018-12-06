var inquirer = require("inquirer");
var fs = require("fs");



function Letters(lettersGuessed, spaces, letter) {
    this.lettersGuessed = []; 
    this.spaces = "_";

    this.letter = letter;
    this.prompts = function(){
        return inquirer.prompt([
             {
                 type: "input",
                 name: "choice",
                 message: "Guess a Letter"
             }
         ]).then(function (action) {
         console.log(action);
         });
     }


    if (letter === lettersGuessed) {
       return this.letter;
    }
    if (letter !== lettersGuessed) {
        return this.spaces;
    }

};

module.exports=Letters;


