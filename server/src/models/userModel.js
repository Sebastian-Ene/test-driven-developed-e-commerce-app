const dbpool = require("../db/dbpool");

module.exports = class User {
    constructor(name, email, password, hash) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.hash = hash;
    }

    insert() {
        return dbpool.query(
            `INSERT INTO users(email, password, username) VALUES ('${this.email}', '${this.hash}', '${this.name}');`
        );
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
                if (adminEntry.rowCount === 1) {
                    resolve(true);
                } else resolve(false);
            } catch (err) {
                reject(err);
            }
        });
    }
};
