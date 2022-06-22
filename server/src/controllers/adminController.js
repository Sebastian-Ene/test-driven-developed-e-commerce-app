const dbpool = require("../db/dbpool");

module.exports.getCourses = async (req, res) => {
    try {
        courses = await dbpool.query(
            `SELECT course_id, name, description, short_description, price, image, is_active FROM courses;`
        );
        res.json(courses.rows);
    } catch (err) {
        res.status(404).json();
    }
    res.json({ courses: "ceva" });
};

module.exports.putCourses = async (req, res) => {
    res.json({ courses: "ceva" });
};
