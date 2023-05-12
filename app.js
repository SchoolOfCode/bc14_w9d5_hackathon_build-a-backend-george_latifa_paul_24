import express from "express";
import morgan from "morgan";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3005;

// app.use(express.static("public"));
app.use(express.json());

//MIDDLEWARE:
//logs out details of the request (third-party middleware)
app.use(morgan("dev"));

//custom middleware to count how many calls the api recieves
let apiCallCount = 0;

app.use((req, res, next) => {
  apiCallCount++;
  console.log(`API Call Count: ${apiCallCount}`);
  next();
});

//ROUTE HANDLERS:

// plan for getRecipes route handler (get all recipes)
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

// Create recipe route handler
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

  const updatedRecipe = {
    title: req.body.title, // Updated title (optional)
    ingredients: req.body.ingredients, // Updated ingredients (optional)
    instructions: req.body.instructions, // Updated instructions (optional)
    image: req.body.image, // Updated image (optional)
  };

  const updateRecipe = await updateRecipeByID(updatedRecipe, id);
  res.json(updateRecipe);
});

//delete recipe route handler
app.delete("/api/recipes/:id", async (req, res) => {
  const id = req.params.id;
  const deletedRecipe = await deleteRecipeByID(id);
  res.json(deletedRecipe);
});


//TELLS SERVER TO LISTEN TO PORT
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
