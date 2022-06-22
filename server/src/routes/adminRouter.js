const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/", adminController.getCourses);
router.put("/", adminController.putCourses);
module.exports = router;
