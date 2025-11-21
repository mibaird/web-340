/**
 * Author: Michelle Baird
 * Date: November 19, 2025
 * File Name: pie.spec.js
 * Description: Test pie-baker.spec.js
 */

"use strict";

const { bakePie } = require("../src/pie");


describe("bakePie", () => {
  let log;
  let exit;

  beforeEach(() => {
    log = jest.spyOn(console, "log").mockImplementation(() => {});
    exit = jest.spyOn(process, "exit").mockImplementation(() => {});
  });

  afterEach(() => {
    log.mockRestore();
    exit.mockRestore();
  });

   // Test 1 All ingredients present
  test("bakes a pie successfully when all essential ingredients are present", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);

    expect(result).toBe("Pie Baker: The apple pie has been baked.");
    expect(log).toHaveBeenCalledWith("Pie Baker: The apple pie has been baked.");
    expect(exit).not.toHaveBeenCalled();
  });

  // Test 2 Missing one ingredient (sugar)
  test("logs a warning and exits when one ingredient is missing", () => {
    const result = bakePie("apple", ["flour", "butter", "apples"]);

    expect(result).toBe(
      "Warning: Missing ingredient(s). Can't bake apple pie."
    );
    expect(log).toHaveBeenCalledWith(
      "Warning: Missing ingredient(s). Can't bake apple pie."
    );
    expect(exit).toHaveBeenCalledWith(1);
  });

  // Test 3 Missing two ingredients (flour AND sugar)
  test("logs a warning and exits when two ingredients are missing", () => {
    const result = bakePie("apple", ["butter", "apples"]);

    expect(result).toBe(
      "Warning: Missing ingredient(s). Can't bake apple pie."
    );
    expect(log).toHaveBeenCalledWith(
      "Warning: Missing ingredient(s). Can't bake apple pie."
    );
    expect(exit).toHaveBeenCalledWith(1);
  });
});

