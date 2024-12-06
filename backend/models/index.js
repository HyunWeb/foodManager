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
const FoodLog = require("./FoodLog")(sequelize, Sequelize.DataTypes);
const Recipe = require("./Recipe")(sequelize, Sequelize.DataTypes);
const Posting = require("./Posting")(sequelize, Sequelize.DataTypes);
const Grocery = require("./Grocery")(sequelize, Sequelize.DataTypes);




db.User = User;
db.FoodLog = FoodLog;
db.Recipe = Recipe;
db.Posting = Posting;
db.Grocery = Grocery;




db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;