const express = require("express");
const coursesController = require("../controllers/courseController");

const router = express.Router();

router.get("/", coursesController.getCourses);
router.get("/:courseId", coursesController.getCourse);
module.exports = router;
