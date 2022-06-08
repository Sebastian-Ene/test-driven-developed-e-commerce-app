import express from "express";

export default async function initApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello world!");
  });

  return app;
}
