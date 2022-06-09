express = require("express");

module.exports = async function initApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
  });

  return app;
};
