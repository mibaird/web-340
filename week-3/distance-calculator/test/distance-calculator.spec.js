"use strict";

/*    Node.js First Edition
      Chapter 3
      Programming Exercise

      Project to use Test Driven Principles (TDD)
      Author: Michelle Baird
      Date:   November 9, 2025

      Filename: distance-calculator.spec.js
*/


const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

// Test 1: Earth → Mars
function testEarthToMars() {
  try {
    const expectedValue = 0.52; // |1.00 - 1.52|
    const actualValue = calculateDistance("Earth", "Mars");
    assert.strictEqual(actualValue, expectedValue);
    console.log("Passed testEarthToMars");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Test 2: Mercury → Venus
function testMercuryToVenus() {
  try {
    const expectedValue = 0.33; // |0.72 - 0.39|
    const actualValue = calculateDistance("Mercury", "Venus");
    assert.strictEqual(actualValue, expectedValue);
    console.log("Passed testMercuryToVenus");
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToVenus: ${error.message}`);
    return false;
  }
}

// Test 3: Jupiter → Saturn
function testJupiterToSaturn() {
  try {
    const expectedValue = 4.38; // |9.58 - 5.20|
    const actualValue = calculateDistance("Jupiter", "Saturn");
    assert.strictEqual(actualValue, expectedValue);
    console.log("Passed testJupiterToSaturn");
    return true;
  } catch (error) {
    console.error(`Failed testJupiterToSaturn: ${error.message}`);
    return false;
  }
}

// Call your test functions here
testEarthToMars();
testMercuryToVenus();
testJupiterToSaturn();
