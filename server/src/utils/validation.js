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
