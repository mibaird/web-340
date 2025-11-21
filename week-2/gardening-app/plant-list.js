"use strict";

// Array of plants
const plants = [
  { name: "Rose", type: "Flower" },
  { name: "Oak", type: "Tree" },
  { name: "Cactus", type: "Succulent" }
];

// Function that returns the plants array
function getPlants() {
  return plants;
}

// Function that adds a plant to the plants array
function addPlant(name, type) {
  plants.push({ name: name, type: type });
}

// Export the functions using CommonJS
module.exports = {
  getPlants: getPlants,
  addPlant: addPlant
};
