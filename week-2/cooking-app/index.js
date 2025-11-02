/**
 * Author:Michelle Baird
 * Date: October 30, 2025
 * File Name: index.js
 * Description:
*/

//Import your module using require
const { createRecipe, setTimer, quit } = require("./recipes");

//Test createRecipe
const ingredients = ["ingredient1", "ingredient2"];
console.log(createRecipe(ingredients));

//Test setTimer
let timerMessage = setTimer (15);
console.log(timerMessage);

//Test quit
quit();
console.log(quit());
