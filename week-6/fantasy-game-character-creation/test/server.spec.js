"use strict";

/*
    Author: Michelle Baird
    Date: December 1, 2025
    File Name: server.js
    Description: fantasy-game-character-creation
 */

const http = require('http');
const server = require('../src/server');

describe("Fantasy Character Creation API", () => {

// Close server AFTER all tests finish
  afterAll(() => {
    server.close();
  });

// Test 1: Create-character (POST)
  test("should create a character with class, gender, and funfact", done => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/create-character?class=Mage&gender=Female&funfact=Smart",
      method: "POST"
    };

    const req = http.request(options, res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe("Character created!");
        done();
      });
    });

    req.end();
  });

// Test 2: Confirm-character (POST)
  test("should confirm character creation", done => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm-character",
      method: "POST"
    };

    const req = http.request(options, res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Character creation confirmed.");
        done();
      });
    });

    req.end();
  });

  // Test 3: View-character (GET)
  test("should return the character that was created", done => {
    http.get("http://localhost:3000/view-character", res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        const parsed = JSON.parse(data);

        expect(res.statusCode).toBe(200);
        expect(parsed.class).toBe("Mage");
        expect(parsed.gender).toBe("Female");
        expect(parsed.funfact).toBe("Smart");

        done();
      });
    });
  });

});
