const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const session = require("express-session");
const app = express();
const PORT = process.env.PORT;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const RecipeRouter = require("./routes/Recipe");
app.use("/Recipe", RecipeRouter);

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // HTTPS에서만 작동하도록 하려면 true로 변경
      maxAge: 60 * 60 * 1000, // 1시간
    },
  })
);

const indexRouter = require("./routes/index");
const userRouter = require("./routes/User");
const logRouter = require("./routes/FoodLog");
const groRouter = require("./routes/Grocery");
const postRouter = require("./routes/Posting");

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/foodlog", logRouter);
app.use("/grocery", groRouter);
app.use("/posting", postRouter);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    try {
      console.log(`http://localhost:${PORT}`);
    } catch (error) {
      console.error(error);
    }
  });
});
