// File: recipe-input-cli.js
const readline = require("readline"); // import readline module

function main() {
  // create readline interface object
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // prompt the user to input a recipe name and ingredients
  rl.question("Enter a recipe name: ", function (name) {
    rl.question("Enter the ingredients: ", function (ingredients) {
      console.log(`Recipe Name: ${name}`);
      console.log(`Ingredients: ${ingredients}`);
      rl.close(); // close the readline object
    });
  });
}

main(); // call the main function
