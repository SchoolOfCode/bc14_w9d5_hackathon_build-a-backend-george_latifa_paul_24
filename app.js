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

// app.use(express.static("public"));
app.use(express.json());

// plan for getRecipes route handler
// create a variable and equate it to await getRecipes
// our response is 

app.get('/api/recipes', async (req,res) => {
  console.log("recipes works")
  const recipes = await getRecipes();
 const response = {success: true, payload: recipes,}
 res.send(response)
})
  
  

app.listen(PORT, () => {
  console.log (`Server listening on port ${PORT}`);
});
