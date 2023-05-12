import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES

// read the recipes.json file and save it to the variable
// parse its content
// return the whole array
export async function getRecipes() {
  console.log("get recipes worked");
  const allRecipesJSON = await fs.readFile(fileName, "utf-8");
  const allRecipes = JSON.parse(allRecipesJSON);
  return allRecipes;
}
//read recipes and save to variable
//parse its contents
//if statement -> if id matches router id then return recipe
// GET A RECIPE BY ID
export async function getRecipeByID(id) {
  console.log("get recipe by ID worked");
  const allRecipesJSON = await fs.readFile(fileName, "utf-8");
  const allRecipes = JSON.parse(allRecipesJSON);
  for (let i = 0; i < allRecipes.length; i++) {
    if (allRecipes[i].id === id) {
      return allRecipes[i];
    }
  }
  return null;
}

//read recipes and save to variable
//parse its contents
// push new recipe to to array
// CREATE A RECIPE
export async function createRecipe(newRecipe) {
  console.log("create recipe worked");
  const allRecipesJSON = await fs.readFile(fileName, "utf-8");
  const allRecipes = JSON.parse(allRecipesJSON);

  const recipe = {
    id: uuidv4(),
    // Spread operator used
    ...newRecipe,
  };

  allRecipes.push(recipe);
  await fs.writeFile(fileName, JSON.stringify(allRecipes));

  return recipe;
}

//read recipes and save to variable
//parse its contents
// update recipe by ID
// Return updated recipe
// UPDATE A RECIPE BY ID
export async function updateRecipeByID(updatedRecipe, id) {
  console.log("update recipe ID worked");
  const allRecipesJSON = await fs.readFile(fileName, "utf-8");
  const allRecipes = JSON.parse(allRecipesJSON);

  let recipe = null;

  for (let i = 0; i < allRecipes.length; i++) {
    if (allRecipes[i].id === id) {
      recipe = allRecipes[i];
      allRecipes[i].title = updatedRecipe.title;
      allRecipes[i].ingredients = updatedRecipe.ingredients;
      allRecipes[i].instructions = updatedRecipe.instructions;
      allRecipes[i].image = updatedRecipe.image;
      //   allRecipes[i].title = updatedRecipe.title;
    }
  }

  await fs.writeFile(fileName, JSON.stringify(allRecipes));

  return recipe;
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
