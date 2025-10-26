// File: recipe-cli-extended.js
// Displays a recipe name and its ingredients entered from the command line

function main() {
  // check if the user entered two things: recipe name and ingredients
  if (process.argv.length !== 4) {
    console.error("Usage: node recipe-cli-extended.js <recipe> <ingredients>"); //display error message
    process.exit(1); //exit with a non-zero error code
  }

  const recipe = process.argv[2];        // get the recipe name from CLI args
  const ingredients = process.argv[3];   // get the ingredianets from CLI args
  console.log("Recipe: " + recipe); // display the recipe name
  console.log("Ingredients: " + ingredients); //display the ingredients
}

main(); // call the main function
