"use strict";

/**
 * Author: Michelle Baird
 * Date: October 30, 2025
 * File Name: recipes.js
 * Description:
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  let message = "Recipe created with ingredients: ";

// loop through the array and add each ingredient to the message
  for (let i = 0; i < ingredients.length; i++) {
    message += ingredients[i];
    if (i < ingredients.length - 1) {
      message += ", ";
    }
  }

  return message;
}

// Define the setTimer function
function setTimer(minutes) {
  return "Timer set for " + minutes + " minutes";
}

// Define the quit function
function quit() {
  return "Program exited";
}

// Export the functions
module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit
};
