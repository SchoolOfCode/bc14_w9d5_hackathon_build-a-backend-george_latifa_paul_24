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
      if (updatedRecipe.title) {
        allRecipes[i].title = updatedRecipe.title;
      }
      if (updatedRecipe.ingredients) {
        allRecipes[i].ingredients = updatedRecipe.ingredients;
      }
      if (updatedRecipe.instructions) {
        allRecipes[i].instructions = updatedRecipe.instructions;
      }
      if (updatedRecipe.image) {
        allRecipes[i].image = updatedRecipe.image;
      }
    }
  }

  await fs.writeFile(fileName, JSON.stringify(allRecipes));

  return recipe;
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {
  const allRecipesJSON = await fs.readFile(fileName, "utf-8");
  const allRecipes = JSON.parse(allRecipesJSON);

  // Find the index of the recipe with the matching ID
  const index = allRecipes.findIndex((recipe) => recipe.id === id);

  // Check if the recipe was found (index !== -1)
  if (index !== -1) {
    // Remove the recipe from the array using splice
    const deletedRecipe = allRecipes.splice(index, 1);

    // Write the updated array back to the file
    await fs.writeFile(fileName, JSON.stringify(allRecipes), "utf-8");

    // Return the deleted recipe
    return deletedRecipe;
  }

  // If the recipe was not found, return null
  return null;
}
