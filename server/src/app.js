const express = require("express");
const logger = require("morgan");
const coursesRouter = require("./routes/courseRouter.js");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/courses", coursesRouter);
app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

module.exports = app;
