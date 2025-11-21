"use strict";

// Import the getPlants and addPlant functions
const { getPlants, addPlant } = require("./plant-list");

// Function that displays the plants array to the console
function displayPlants() {
  const plants = getPlants();

  for (let i = 0; i < plants.length; i++) {
    console.log("Plant: " + plants[i].name + "\nType: " + plants[i].type);
    console.log(""); // new line
  }
}

// Main function
function main() {
  console.log("--Plant List--");
  displayPlants();

  console.log("Adding a new plant...");
  addPlant("Tulip", "Flower");

  console.log("\nUpdated Plant List");
  displayPlants();
}

// Run program
main();
