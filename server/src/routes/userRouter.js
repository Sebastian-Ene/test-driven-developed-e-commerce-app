const express = require("express");
const {
    register,
    signin,
    orders,
    order,
} = require("../controllers/userController");
const validateRegister = require("../utils/validation").validateRegister;
const jwtAuth = require("../utils/auth").authJWT;

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/signin", signin);
router.get("/orders", jwtAuth, orders);
router.post("/order", jwtAuth, order);

module.exports = router;
