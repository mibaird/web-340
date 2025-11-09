"use strict";

class DivideByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivideByZeroError";
  }
}

// Function that throws on invalid input or divide-by-zero
function divide(x, y) {
    if (y === 0) {
    throw new DivideByZeroError("Cannot divide by zero");
  }
  return x / y;
}

// Try/Catch demo
function main() {
  try {
    const result = divide(10, 0);
    console.log("The result is: " + result);
  } catch (err) {
    console.error("An error occurred: " + err.message);
  }
}

main();

