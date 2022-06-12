const express = require("express");
const logger = require("morgan");
const productsRouter = require("./routes/productRouter.js");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productsRouter);
app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

module.exports = app;
