const express = require("express");
const {
    register,
    signin,
    validateRegister,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/signin", signin);

module.exports = router;
