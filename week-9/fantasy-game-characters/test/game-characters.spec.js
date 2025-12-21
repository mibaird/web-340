"use strict";
/*  Author: Michelle Baird
    Date:   December 18,2025
    Filename: game-character.spec.js
*/

// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    // Implement this test
    gameCharacters.getCharacters((data, error) => {
      expect(error).toBeNull();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty("Class");
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // Implement this test
    const missing = new GameCharacters("missing-file.js");

    missing.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // Implement this test
    const failing = new GameCharacters("failing-script.js");

    failing.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});