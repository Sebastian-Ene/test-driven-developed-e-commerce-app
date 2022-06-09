express = require("express");
logger = require("morgan");
pool = require("./db/dbpool");
productsRouter = require("./routes/product.js");

module.exports = async function initApp() {
  const app = express();

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/api/products", productsRouter);
  app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
  });

  return app;
};
