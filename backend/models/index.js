const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.js")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const User = require("./User")(sequelize, Sequelize.DataTypes);

const FoodLog = require(".FoodLog/FoodLog")(sequelize, Sequelize.DataTypes);
const UserLog = require(".FoodLog/UserLog")(sequelize, Sequelize.DataTypes);

const Recipe = require("./Recipe/Recipe")(sequelize, Sequelize.DataTypes);
const Step = require("./Recipe/Step")(sequelize, Sequelize.DataTypes);
const Ingredient = require("./Recipe/Ingredient")(sequelize, Sequelize.DataTypes);
const RecipeReview = require("./Recipe/RecipeReview")(sequelize, Sequelize.DataTypes);
const RecipeLike = require("./Recipe/RecipeLike")(sequelize, Sequelize.DataTypes);
const UserRecipe = require("./Recipe/UserRecipe")(sequelize, Sequelize.DataTypes);

const Posting = require("./Posting/Posting")(sequelize, Sequelize.DataTypes);
const PostComment = require("./Posting/PostComment")(sequelize, Sequelize.DataTypes);
const PostLike = require("./Posting/PostLike")(sequelize, Sequelize.DataTypes);
const UserPosting = require("./Posting/UserPosting")(sequelize, Sequelize.DataTypes);

const Grocery = require("./Grocery/Grocery")(sequelize, Sequelize.DataTypes);
const UserGrocery = require("./Grocery/UserGrocery")(sequelize, Sequelize.DataTypes);






db.User = User;

db.FoodLog = FoodLog;
db.UserLog = UserLog;

db.Recipe = Recipe;
db.Step = Step;
db.Ingredient = Ingredient;
db.RecipeReview = RecipeReview;
db.RecipeLike = RecipeLike;
db.UserRecipe = UserRecipe;

db.Posting = Posting;
db.PostComment = PostComment;
db.PostLike = PostLike;
db.UserPosting = UserPosting;

db.Grocery = Grocery;
db.UserGrocery = UserGrocery;





db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;