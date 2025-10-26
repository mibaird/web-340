/**
 * Author: Michelle Baird
 * Date: October 26, 2025
 * File Name: weight-converter.js
 * Description: converts pounds to kilograms
*/

"use strict";

//check to see if user entered a weight
function main() {
  if (process.argv.length !== 3) {
    console.error("Usage: node weight-converter.js <pounds>"); //display error message
    process.exit(1); // exit the program with a non-zero error code
  }

  const pounds = process.argv [2]; // get the pounds from what the user typed in CLI args

  //check if input is a number
  if (isNaN(pounds)) {
    console.error("Input must be a number.");
    process.exit(1);
  }

  //convert pounds to kilograms (1lb = .45359237)
  const kilograms = (pounds *0.45359237).toFixed(2);

  console.log(kilograms);

}

main(); // calls the main function


