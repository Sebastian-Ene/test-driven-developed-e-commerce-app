const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../utils/secrets").jwtSecret;
const saltRounds = 10;

module.exports.validateRegister = async (req, res, next) => {
    if (!req.body.name) {
        res.json({ err: "Missing name" });
    }
    if (!req.body.email) {
        res.json({ err: "Missing email" });
    }
    if (!req.body.password) {
        res.json({ err: "Missing password" });
    } else {
        next();
    }
};

module.exports.register = async (req, res) => {
    try {
        const user = new User(
            req.body.name,
            req.body.email,
            req.body.password,
            null
        );

        user.hash = await bcrypt.hash(user.password, saltRounds);
        // console.log(user);

        // console.log(
        //     `INSERT INTO users(email, password, username) VALUES ('${user.email}', '${user.password}', '${user.name}');`
        // );
        console.log(user.hash, user.hash.length);
        await user.insert();
        accessToken = jwt.sign(
            { name: user.name, email: user.email },
            jwtSecret
        );
        res.status(201).json({
            email: user.email,
            name: user.name,
            accessToken,
        });
    } catch (err) {
        console.log(err);
        if (err.detail && err.detail.includes("already exists.")) {
            res.status(409).json({ err: "email already registered" });
        } else {
            res.send(err);
        }
    }
};

module.exports.signin = async (req, res) => {
    try {
        const user = new User(null, req.body.email, req.body.password, null);
        await user.get();
        const isPassMatch = await bcrypt.compare(user.password, user.hash);
        let accessToken;
        if (isPassMatch) {
            accessToken = jwt.sign(
                { name: user.name, email: user.email },
                jwtSecret
            );
        }
        res.json({ isPassMatch, accessToken, admin });
    } catch (err) {
        res.status(400).send(err);
    }
};
