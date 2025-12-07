"use strict";

/*
    Author: Michelle Baird
    Date: December 5, 2025
    File Name: character-creator.js
    Description: fantasy-game-character test
 */

const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // Initialize class
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    // Implement _write method
    const input = chunk.toString().trim();

    // Validate input
    if (!input) {
      callback(new Error("Invalid character data"));
      return;
    }

    const parts = input.split("|");

    if (parts.length < 3) {
      callback(new Error("Invalid character data"));
      return;
    }

    const characterClass = parts[0].trim();
    const gender = parts[1].trim();
    const funFact = parts.slice(2).join("|").trim();

    const description =
      `The character is a ${gender} ${characterClass}. Fun fact: ${funFact}.`;

    this.queue.push(description);

    this._read();

    callback();
  }

  _read(size) {
    if (this.queue.length > 0) {
      this.push(this.queue.shift() + "\n");
    } else {
    }
  }
}

module.exports = CharacterCreator;
