// src/plant-list.js
"use strict";

const plants = [
  { name: "Rose", type: "Flower" },
  { name: "Oak", type: "Tree" },
  { name: "Basil", type: "Herb" }
];

function getPlants() {
  return plants;
}

function addPlant(name, type) {
  plants.push({ name, type });
}

module.exports = {
  getPlants,
  addPlant
};