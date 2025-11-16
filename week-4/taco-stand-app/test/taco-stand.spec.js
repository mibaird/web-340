/**
 * Author: Michelle Baird
 * Date: November 14, 2025
 * File Name: taco-stand.spec.js
 * Description:
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

// Write tests for the TacoStandEmitter methods

// Test 1: serveCustomer should emit "serve" with the correct customer
function testServeCustomer(){
  try {
    const tacoStand = new TacoStandEmitter();
    let eventFired = false;

    tacoStand.on("serve", (customer) => {
      eventFired = true;
      assert.strictEqual (customer, "Michelle");
    });

    tacoStand.serveCustomer ("Michelle");

    assert.strictEqual (eventFired, true);

    console.log ("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error (`Failed testServeCustomer: ${err}`);
    return false;
  }
}

// Test 2: prepareTaco should emit "prepare" with the correct taco type
function testPrepareTaco() {
  try {
    const tacoStand = new TacoStandEmitter();
    let eventFired = false;

    tacoStand.on("prepare", (taco) => {
      eventFired = true;
      assert.strictEqual(taco, "Steak and cheese");
    });

    tacoStand.prepareTaco("Steak and cheese");

    assert.strictEqual(eventFired, true);

    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

// Test 3: handleRush should emit "rush" with the correct description
function testHandleRush() {
  try {
    const tacoStand = new TacoStandEmitter();
    let eventFired = false;

    tacoStand.on("rush", (rush) => {
      eventFired = true;
      assert.strictEqual(rush, "Rush");
    });

    tacoStand.handleRush("Rush");

    assert.strictEqual(eventFired, true);

    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

// Run all tests
function runTests() {
  const results = [
    testServeCustomer(),
    testPrepareTaco(),
    testHandleRush()
  ];

  const allPassed = results.every((result) => result === true);

  if (allPassed) {
    console.log ("All tests passed");
    process.exit (0);
  } else {
    console.error ("At least one test failed");
    process.exit (1);
  }
}

runTests ();
