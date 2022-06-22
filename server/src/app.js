const cors = require("cors");
const express = require("express");
const logger = require("morgan");

const adminRouter = require("./routes/adminRouter.js");
const coursesRouter = require("./routes/courseRouter.js");
const userRouter = require("./routes/userRouter.js");
const authJWT = require("./utils/auth").authJWT;
const isAdmin = require("./utils/isAdmin").isAdmin;

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/admin", authJWT, isAdmin, adminRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

module.exports = app;
