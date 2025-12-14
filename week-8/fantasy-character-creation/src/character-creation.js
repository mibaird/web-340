"use strict";

/*
    Author: Michelle Baird
    Date: December 12, 2025
    File Name: character-creator.js
    Description:
*/
"use strict";

// For promises:
const fs = require("fs").promises;
const { join } = require("path");

// Correct path to your JSON file
const FILE_PATH = join(__dirname, "test-characters.json");

async function createCharacter(character) {
  try {
    let characters = [];

    // Read existing characters if file exists
    try {
      const data = await fs.readFile(FILE_PATH, "utf8");
      characters = JSON.parse(data);
    } catch (err) {
      characters = []; // file does not exist → start fresh
    }

    // Add the new character
    characters.push(character);

    // Write array back to file
    await fs.writeFile(FILE_PATH, JSON.stringify(characters, null, 2));
  } catch (err) {
    throw err;
  }
}

// GET CHARACTERS
async function getCharacters() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (err) {
    throw err; // Should throw so test #3 passes
  }
}

//EXPORTS
module.exports = { createCharacter, getCharacters };
