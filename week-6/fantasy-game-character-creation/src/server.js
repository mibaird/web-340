"use strict";

/*
  Author: Michelle Baird
  Date: December 1, 2025
  File Name: server.js
  Description: fantasy-game-character-creation
 */

const http = require('http');
const url = require('url');

// Stores character after created
let createdCharacter = null;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

// Create character (POST)
if (pathname === "/create-character" && req.method === "POST") {
    const charClass = query.class;
    const gender = query.gender;
    const funfact = query.funfact;

    createdCharacter = {
      class: charClass,
      gender: gender,
      funfact: funfact
    };

    res.writeHead(201, { "Content-Type": "text/plain" });
    return res.end("Character created!");
  }

// Confirm character (POST)
 if (pathname === "/confirm-character" && req.method === "POST") {
    if (!createdCharacter) {
      res.writeHead(400);
      return res.end("No character has been created yet.");
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Character creation confirmed.");
  }

// View character (GET)
if (pathname === "/view-character" && req.method === "GET") {
    if (!createdCharacter) {
      res.writeHead(404);
      return res.end("No character found. Create one first.");
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(createdCharacter));
  }

  // Default route
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Route not found");

});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;