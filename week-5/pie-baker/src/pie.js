/**
 * Author: Michelle Baird
 * Date: November 19, 2025
 * File Name: pie.js
 * Description: pie baker
 */
"use strict";

function bakePie(pieType, ingredients) {

  // Required ingredients for pies
  const requiredIngredients = ["flour", "sugar", "butter"];

  let hasFlour = ingredients.includes("flour");
  let hasSugar = ingredients.includes("sugar");
  let hasButter = ingredients.includes("butter");

  // If all ingredients are included bake pie, if not then warning message and exit
  if (hasFlour && hasSugar && hasButter) {
    console.log(`Pie Baker: The ${pieType} pie has been baked.`);
    return `Pie Baker: The ${pieType} pie has been baked.`;
  } else {
    console.log(`Warning: Missing ingredient(s). Can't bake ${pieType} pie.`);
    process.exit(1);
    return `Warning: Missing ingredient(s). Can't bake ${pieType} pie.`;
  }
}

module.exports = { bakePie };