const User = require("../models/userModel");
const Order = require("../models/orderModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../utils/secrets").jwtSecret;
const saltRounds = 10;

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
        //console.log(user.hash, user.hash.length);
        await user.insert();
        // console.log(user);
        accessToken = jwt.sign(
            { name: user.name, email: user.email, id: user.id },
            jwtSecret,
            { expiresIn: "25m" }
        );
        res.status(201).json({
            email: user.email,
            name: user.name,
            accessToken,
        });
    } catch (err) {
        // console.log(err);
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
        //console.log(isPassMatch);
        let accessToken;
        if (isPassMatch) {
            accessToken = jwt.sign(
                { name: user.name, email: user.email, id: user.id },
                jwtSecret,
                { expiresIn: "25m" }
            );
        }
        res.json({ isPassMatch, accessToken, name: user.name });
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports.orders = async (req, res) => {
    try {
        // console.log(req.user);
        const orders = await req.user.getOrders();
        res.json({ orders });
    } catch (err) {
        res.status(400).send();
    }
};

module.exports.order = async (req, res) => {
    try {
        console.log(req.user);
        console.log(req.body);
        const order = new Order(
            req.user.id,
            req.body.course_id,
            req.body.payment_completed
        );
        console.log(order);
        await order.createOrder();
        res.status(201).json({
            status: "success",
        });
    } catch (err) {
        res.status(400).send();
    }
};
