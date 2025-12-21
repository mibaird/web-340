"use strict";
/*  Author: Michelle Baird
    Date:   December 18,2025
    Filename: game-characters.js
*/

// game-characters.js
const { spawn } = require("child_process");
const { join } = require("path");

class GameCharacters {
  constructor(scriptName = "game-characters-data.js") {
    // Set the script file path
  this.scriptPath = join(__dirname, scriptName);
  }

  getCharacters(callback) {
    // Implement this method
     const child = spawn("node", [this.scriptPath]);

    let output = "";

    child.stdout.on("data", (data) => {
      output += data.toString();
    });

    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });

    child.on("close", () => {
      if (output) {
        try {
          const parsed = JSON.parse(output);
          callback(parsed, null);
        } catch (err) {
          callback(null, err);
        }
      }
    });
  }
}

module.exports = { GameCharacters };