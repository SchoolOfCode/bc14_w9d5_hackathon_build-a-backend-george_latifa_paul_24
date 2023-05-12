import express from "express";
import path from "path";
import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

// plan for getRecipes route handler
// create a variable and equate it to await getRecipes
// our response is
app.get("/api/recipes", async (req, res) => {
  console.log("recipes works");
  const recipes = await getRecipes();
  const response = { success: true, payload: recipes };
  res.send(response);
});

//get recipe by ID route hander:
// create variable id that is assigned to id value of recipe
//create a variable for getRecipeById()
//response (success boolean, payload)
app.get("/api/recipes/:id", async (req, res) => {
  console.log("get recipe id has worked");
  const id = req.params.id; //assigns id value of url field to variable
  const recipeById = await getRecipeByID(id); //spread out over two lines to make it more 'readable'
  res.json(recipeById);
});

// Create route handler
app.post("/api/recipes/", async (req, res) => {
  console.log("create recipe has worked");
  const newRecipe = req.body;
  const createNewRecipe = await createRecipe(newRecipe);
  res.json(createNewRecipe);
});

// Update Recipe route handler
app.patch("/api/recipes/:id", async (req, res) => {
  console.log("update recipe has worked");

  const id = req.params.id;

  const updatedRecipe = req.body;
  const updateRecipe = await updateRecipeByID(updatedRecipe, id);
  res.json(updateRecipe);
});

app.delete("/api/recipes/:id", async (req, res) => {
  const id = req.params.id;
  const deletedRecipe = await deleteRecipeByID(id);
  res.json(deletedRecipe);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
