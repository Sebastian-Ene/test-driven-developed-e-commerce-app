const dbpool = require("../db/dbpool");

module.exports = class User {
    constructor(name, email, password, hash, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.hash = hash;
        this.id = id;
    }

    insert() {
        return new Promise(async (resolve, reject) => {
            try {
                const dbResp = await dbpool.query(
                    `INSERT INTO users(email, password, username) VALUES ('${this.email}', '${this.hash}', '${this.name}') RETURNING user_id;`
                );
                if (dbResp.rows.length > 0) this.id = dbResp.rows[0]?.user_id;
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }

    get() {
        return new Promise(async (resolve, reject) => {
            try {
                const dbUser = await dbpool.query(
                    `SELECT * FROM users WHERE email='${this.email}'`
                );
                //console.log(dbUser);
                this.hash = dbUser.rows[0].password;
                this.name = dbUser.rows[0].username;
                this.id = dbUser.rows[0].user_id;
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }

    isAdmin() {
        //NOT TESTED, MIGHT NOT WORK
        return new Promise(async (resolve, reject) => {
            try {
                const adminEntry = await dbpool.query(
                    `SELECT * FROM admins WHERE email='${this.email}'`
                );
                console.log("exista admin cu emailul asta?", adminEntry.rows);
                if (adminEntry.rowCount === 1) {
                    resolve(true);
                } else resolve(false);
            } catch (err) {
                reject(err);
            }
        });
    }

    getOrders() {
        return new Promise(async (resolve, reject) => {
            try {
                const orders = await dbpool.query(
                    `SELECT * FROM orders join courses using(course_id) WHERE user_id=${this.id}`
                );
                resolve(orders.rows);
            } catch (err) {
                reject(err);
            }
        });
    }
};
