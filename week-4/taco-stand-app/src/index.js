/**
 * Author: Michelle Baird
 * Date: November 14, 2025
 * File Name: index.js
 * Description: CLI for TacoStandEmitter
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Set up event listeners
tacoStand.on("serve", (customer) => {
  console.log("Serving customer: " + customer);
});

tacoStand.on("prepare", (taco) => {
  console.log("Preparing taco: " + taco);
});

tacoStand.on("rush", (rush) => {
  console.log("Rush event: " + rush);
});

// Handle user input
rl.on("line", (input) => {
  const parts = input.trim().split(" ");
  const command = parts[0];
  const argument = parts.slice(1).join(" ");

  switch (command) {
    case "serve":
      tacoStand.serveCustomer(argument);
      break;

    case "prepare":
      tacoStand.prepareTaco(argument);
      break;

    case "rush":
      tacoStand.handleRush(argument);
      break;

    case "exit":
      console.log("Exiting taco stand CLI.");
      rl.close();
      break;

    default:
      console.log('Unknown command. Use "serve", "prepare", "rush", or "exit".');
  }
});

console.log(
  'Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.\nType "exit" to quit.'
);
