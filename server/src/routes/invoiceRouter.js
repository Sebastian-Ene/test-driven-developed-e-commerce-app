const express = require("express");
const authJWT = require("../utils/auth").authJWT;
const invoiceController = require("../controllers/invoiceController");

const router = express.Router();

router.post("/", authJWT, invoiceController.createInvoice);
router.get("/:pdfName", invoiceController.sendInvoice);
module.exports = router;
