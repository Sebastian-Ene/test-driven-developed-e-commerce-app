express = require("express");
router = express.Router();

const productController = (req, res) => {
  res.send(`sexy${req.params.productId}`);
};

const productsController = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({
    ayy: 1,
    ayyy: 2,
    ayyyy: "puerto ricoooo",
  });
};

router.get("/", productsController);
router.get("/:productId", productController);
module.exports = router;
