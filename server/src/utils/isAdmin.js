module.exports.isAdmin = async (req, res, next) => {
    try {
        const isAdmin = await req.user.isAdmin();
        console.log(isAdmin);
        if (isAdmin) {
            return next();
        }
        return res.status(401).json();
    } catch (err) {
        return res.status(401).json(err);
    }
};
