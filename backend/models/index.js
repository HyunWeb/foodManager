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


// User - FoodLog -> UserLog
User.hasMany(UserLog, {foreignKey: "userID", onDelete: 'cascade'});
UserLog.belongsTo(User, {foreignKey: "userID", onDelete: 'cascade'});

FoodLog.hasOne(UserLog, {foreignKey: "logID", onDelete: 'cascade'});
UserLog.belongsTo(FoodLog, {foreignKey: "logID", onDelete: 'cascade'});

// User - Recipe -> UserRecipe
User.hasMany(UserRecipe, {foreignKey: "userID", onDelete: 'cascade'});
UserRecipe.belongsTo(User, {foreignKey: "userID", onDelete: 'cascade'});

Recipe.hasOne(UserRecipe, {foreignKey: "recipeID", onDelete: 'cascade'});
UserRecipe.belongsTo(Recipe, {foreignKey: "recipeID", onDelete: 'cascade'});

Recipe.hasMany(Step, {foreignKey: "recipeID", onDelete: 'cascade'});
Step.belongsTo(Recipe, {foreignKey: "recipeID", onDelete: 'cascade'});

Recipe.hasMany(Ingredient, {foreignKey: "recipeID", onDelete: 'cascade'});
Ingredient.belongsTo(Recipe, {foreignKey: "recipeID", onDelete: 'cascade'});



// User - Posting -> UserPosting
User.hasMany(UserPosting, {foreignKey: "userID", onDelete: 'cascade'});
UserPosting.belongsTo(User, {foreignKey: "userID", onDelete: 'cascade'});

Posting.hasOne(UserPosting, {foreignKey: "postingID", onDelete: 'cascade'});
UserPosting.belongsTo(Posting, {foreignKey: "postingID", onDelete: 'cascade'});

// User - Grocery -> UserGrocery
User.hasMany(UserGrocery, {foreignKey: "userID", onDelete: 'cascade'});
UserGrocery.belongsTo(User, {foreignKey: "userID", onDelete: 'cascade'});

Grocery.hasOne(UserGrocery, {foreignKey: "groceryID", onDelete: 'cascade'});
UserGrocery.belongsTo(Grocery, {foreignKey: "groceryID", onDelete: 'cascade'});




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