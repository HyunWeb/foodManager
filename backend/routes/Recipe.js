const express = require("express");
const router = express.Router();
const controller = require("../controllers/CRecipe");

router.post("/insert", controller.Recipeinsert);

router.delete("/delete", controller.RecipeDelete);

router.get("/find/:recipeID", controller.RecipefindOne);

router.patch("/update/:recipeID", controller.Recipeupdate);

module.exports = router;
