// Array of recipes
const recipes = [
  { name: "Pasta", ingredients: "Noodles, Tomato Sauce" },
  { name: "Salad", ingredients: "Lettuce, Tomato, Cucumber" },
  { name: "Soup", ingredients: "Broth, Vegetables" }
];

// main function for the program
// displays the recipe name and ingredients to the console
function main() {
  for (let i = 0; i < recipes.length; i++) {
    console.log("Recipe: " + recipes[i].name + "\nIngredients: " + recipes[i].ingredients);
    console.log(""); // new line
  }
}

// call the main function
main();
