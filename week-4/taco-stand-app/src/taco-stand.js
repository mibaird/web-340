"use strict";
/**
 * Author: Michelle Baird
 * Date: November 14, 2025
 * File Name: taco-stand.js
 * Description:
 */

const EventEmitter = require("events");

// Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
class TacoStandEmitter extends EventEmitter {
  constructor() {
    super();
  }

   serveCustomer(customer) {
    this.emit("serve", customer);
  }

  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;