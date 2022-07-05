const dbpool = require("../db/dbpool");

module.exports = class Order {
    constructor(user_id, course_id, payment_completed) {
        this.user_id = user_id;
        this.course_id = course_id;
        this.payment_completed = payment_completed;
    }

    createOrder() {
        return dbpool.query(
            `INSERT INTO orders (user_id, course_id, payment_completed) values ('${this.user_id}', '${this.course_id}', '${this.payment_completed}');`
        );
    }
};
