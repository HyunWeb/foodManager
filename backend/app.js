const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`https:localhost:${PORT}`);
});
