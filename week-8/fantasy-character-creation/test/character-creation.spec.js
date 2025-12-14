"use strict";

/*
    Author: Michelle Baird
    Date: December 12, 2025
    File Name: character-creaton.js
    Description:
*/

// For promises:
const fs = require("fs").promises;
const { join } = require("path");

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  const TEST_FILE = join(__dirname, "../src/test-characters.json");

  beforeEach(async () => {
    jest.resetModules();
    ({ createCharacter, getCharacters } = require("../src/character-creation"));

    // Reset file before each test
    await fs.writeFile(TEST_FILE, "[]");
  });

  // 1. Test that data can be written to a file
  test("should write character data to a file", async () => {
    const character = {
      class: "Warrior",
      gender: "Male",
      special: "Uses special swords",
    };

    await createCharacter(character);

    const data = await fs.readFile(TEST_FILE, "utf8");
    const characters = JSON.parse(data);

    expect(characters).toContainEqual(character);
  });

  // 2. Test that data can be read from a file
  test("should read character data from a file", async () => {
    const sample = [
      { class: "Mage", gender: "Female", special: "Casts spells" },
    ];

    await fs.writeFile(TEST_FILE, JSON.stringify(sample));

    const characters = await getCharacters();

    expect(characters).toEqual(sample);
  });

  // 3. Test that errors are handled when reading from a file
  test("should handle errors when reading from a file", async () => {
    await fs.unlink(TEST_FILE).catch(() => {});

    await expect(getCharacters()).rejects.toThrow();
  });
});