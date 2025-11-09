"use strict";

/*    Node.js First Edition
      Chapter 3
      Programming Exercise

      Project to use Test Driven Principles (TDD)
      Author: Michelle Baird
      Date:   November 9, 2025

      Filename: distance-calculator.js
*/

const planetDistances = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1.00,
  Mars: 1.52,
  Jupiter: 5.20,
  Saturn: 9.58,
  Uranus: 19.22,
  Neptune: 30.05
};


function calculateDistance(planet1, planet2) {
 if (!planetDistances[planet1]) {
  throw new Error("Invalid planet name for the first planet.");
}

if (!planetDistances[planet2]) {
  throw new Error("Invalid planet name for the second planet.");
}

const distance = Math.abs(planetDistances[planet1] - planetDistances[planet2]);
return Number (distance.toFixed(2));
}

module.exports = calculateDistance;