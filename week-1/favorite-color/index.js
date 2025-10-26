// import packages
const chalk = require("chalk");
const readline = require("readline");

// function to return the color message based on the color selected
function colorMessage(color) {
  const output = "\nYour favorite color is "; // output string

// switch statement to match the color to the color message
  switch (color) {
    case "1":
      return chalk.blue(output + "blue");
    case "2":
      return chalk.red(output + "red");
    case "3":
      return chalk.green(output + "green");
    case "4":
      return chalk.yellow(output + "yellow");
    case "5":
      return chalk.cyan(output + "cyan");
    default:
      return "Invalid color.";
  }
}

// display a menu with the available color options
// blue, red, green, yellow, and orange
function menu() {
  console.log("\nAvailable colors:");
  console.log("1. Blue");
  console.log("2. Red");
  console.log("3. Green");
  console.log("4. Yellow");
  console.log("5. Cyan");
}

// Main function for the program
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  menu(); // display the menu
  // prompt the user to select a color
  rl.question("\nWhat is your favorite color? ", function (answer) {
    console.log(colorMessage(answer));
    rl.close();
  });
}

main(); //call the main function
