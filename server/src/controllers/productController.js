const dbpool = require("../db/dbpool");

module.exports.getProduct = async (req, res) => {
  try {
    const user = await dbpool.query(
      `SELECT * FROM products WHERE product_id=${req.params.productId}`
    );
    res.setHeader("Content-Type", "application/json");
    res.json({
      status: "ok",
      data: {
        user: user.rows[0],
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      err: err,
    });
  }
};

module.exports.getProducts = async (req, res) => {
  try {
    const users = await dbpool.query("SELECT * from products");
    res.setHeader("Content-Type", "application/json");
    res.json({
      status: "ok",
      data: {
        users: users.rows,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      err: err,
    });
  }
};
