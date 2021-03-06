const dbpool = require("../db/dbpool");

module.exports.getCourse = async (req, res) => {
    try {
        const course = await dbpool.query(
            `SELECT course_id, name, description, short_description, price, image FROM courses WHERE course_id=${req.params.courseId}`
        );
        res.setHeader("Content-Type", "application/json");
        res.json({
            status: "ok",
            data: {
                course: course.rows[0],
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "failed",
            err: err,
        });
    }
};

module.exports.getCourses = async (req, res) => {
    try {
        const courses = await dbpool.query(
            "SELECT course_id, name, short_description from courses where is_active='t';"
        );
        res.setHeader("Content-Type", "application/json");
        res.json({
            status: "ok",
            data: {
                courses: courses.rows,
            },
        });
    } catch (err) {
        // console.log(err);
        res.status(404).json({
            status: "failed",
            err: err,
        });
    }
};
