const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const RecipeRouter = require("./routes/Recipe");
app.use("/Recipe", RecipeRouter);

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    try {
      console.log(`http://localhost:${PORT}`);
    } catch (error) {
      console.error(error);
    }
  });
});
