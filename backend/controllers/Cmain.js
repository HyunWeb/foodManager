const { Op } = require("sequelize");
const db = require("../models");
const sequelize = require("sequelize");
const {
  User,
  FoodLog,
  Recipe,
  Step,
  Ingredient,
  RecipeReview,
  RecipeLike,
  Posting,
  PostComment,
  PostLike,
  Grocery
} = require("../models/index");


// exports.get_index = async (req, res) => {
//   res.send("hello");
// };
