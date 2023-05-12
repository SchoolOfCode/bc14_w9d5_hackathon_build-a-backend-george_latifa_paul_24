import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES

// read the recipes.json file and save it to the variable
// parse its content
// return the whole array
export async function getRecipes() {
    console.log("get recipes worked");
    const allRecipesJSON = await fs.readFile(fileName,"utf-8");
    const allRecipes = JSON.parse(allRecipesJSON);
    return allRecipes
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
