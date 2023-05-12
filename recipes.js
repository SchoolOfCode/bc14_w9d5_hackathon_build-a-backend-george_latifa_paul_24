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
//read recipes and save to variable
//parse its contents
//if statement -> if id matches router id then return recipe
// GET A RECIPE BY ID
export async function getRecipeByID(id) {
    console.log("get recipe by ID worked");
    const allRecipesJSON = await fs.readFile(fileName,"utf-8");
    const allRecipes = JSON.parse(allRecipesJSON);
    for (let i = 0; i < allRecipes.length; i++){
        if (allRecipes[i].id === id){
            console.log('recipe by id', allRecipes[i])
            return allRecipes[i]
        }
    }
    return null;
}


// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
