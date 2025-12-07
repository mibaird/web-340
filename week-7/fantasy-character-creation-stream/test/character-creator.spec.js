"use strict"

/*
    Author: Michelle Baird
    Date: December 5, 2025
    File Name: character-creator.spec.js
    Description: fantasy-game-character test
 */

const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const inputs = [
      "Warrior|Male|Fights well with special sword",
      "Mage|Female|Excels at spell work"
    ];

    const expected = [
      'The character is a Male Warrior. Fun fact: Fights well with special sword.',
      'The character is a Female Mage. Fun fact: Excels at spell work.'
    ];

    const outputs = [];

    characterCreator.on("data", (chunk) => {
      outputs.push(chunk.toString().trim());

      // When all outputs are received, assert and finish the test
      if (outputs.length === expected.length) {
        expect(outputs).toEqual(expected);
        done();
      }
    });

    // Write all inputs into the stream, then end it
    inputs.forEach(str => characterCreator.write(str));
    characterCreator.end();
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // Listen for the error event
    characterCreator.on("error", (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Invalid character data");
      done();
    });

    // Write an empty string should be treated as invalid data
    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    const input = "Rogue|Other|Prefers stealth missions";

    const expected =
      'The character is a Other Rogue. Fun fact: Prefers stealth missions.';

    characterCreator.on("data", (chunk) => {
      const output = chunk.toString().trim();
      expect(output).toBe(expected);
      done();
    });

    characterCreator.write(input);
    characterCreator.end();
  });
});
