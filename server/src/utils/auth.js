const jwt = require("jsonwebtoken");
const jwtSecret = require("../utils/secrets").jwtSecret;
const User = require("../models/userModel");

module.exports.authJWT = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    //console.log(authHeader);
    const authToken = authHeader && authHeader.split(" ")[1];
    //console.log();
    //console.log(authToken);
    if (authToken == null) {
        return res.status(401).json();
    }
    try {
        const tokenData = jwt.verify(authToken, jwtSecret);
        //console.log(tokenData);
        const user = new User(
            tokenData.name,
            tokenData.email,
            null,
            null,
            tokenData.id
        );
        req.user = user;
        console.log("auth");
        next();
    } catch (err) {
        return res.status(401).json();
    }
};
