const dbpool = require("../db/dbpool");

module.exports.getCourses = async (req, res) => {
    try {
        courses = await dbpool.query(
            `SELECT course_id, name, description, short_description, price, image, is_active FROM courses;`
        );
        return res.json(courses.rows);
    } catch (err) {
        return res.status(404).json();
    }
};

module.exports.getOrders = async (req, res) => {
    try {
        orders = await dbpool.query(
            `SELECT * FROM orders join courses using(course_id) join users using(user_id)`
        );
        console.log(orders);
        return res.json(orders.rows);
    } catch (err) {
        console.log(err);
        return res.status(404).json();
    }
};

module.exports.putCourses = async (req, res) => {
    return res.json({ courses: "ceva" });
};
