// File: recipe-converter.js
const readline = require("readline"); // import readline module

function main() {
  // create readline interface object
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // prompt the user to imput an ingredient and its quantity in tablespoons
  rl.question("Enter an ingredient: ", function (ingredient) {
    // ask for a quantity in tablespoons
    rl.question("Enter the quantity in tablespoons: ", function (tablespoons) {
      // check if the input is a number
      if (isNaN(tablespoons)) {
        console.error("Input must be a number."); //display error message
        process.exit(1); // exit with a non-zero error code
      }

      // convert tablespoons to cups  and round to two decimals (16 tablespoons = 1 cup)
      const cups = (tablespoons / 16).toFixed(2);
      // display the conversion
      console.log(
        `For ${ingredient}, ${tablespoons} tablespoons is equivalent to ${cups} cups.`
      );

      //close the readline object
      rl.close(); // always close the readline interface
    });
  });
}

main(); // call the main function
