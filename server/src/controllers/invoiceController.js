const dbpool = require("../db/dbpool");
const PDFDocument = require("pdfkit");
const crypto = require("crypto");
const fs = require("fs");

module.exports.createInvoice = async (req, res) => {
    try {
        const pdfName = generatePdf(req.body.test);
        return res.status(201).json({ pdfName });
    } catch (err) {
        return res.status(404);
    }
};

module.exports.sendInvoice = async (req, res) => {
    try {
        const data = fs.readFileSync(`./${req.params.pdfName}`);
        res.contentType("application/pdf");
        return res.send(data);
    } catch (err) {
        return res.status(404);
    }
};
const generatePdf = (vari) => {
    const pdf = new PDFDocument();
    const pdfName = crypto.randomBytes(20).toString("hex") + ".pdf";
    pdf.pipe(fs.createWriteStream(pdfName));
    pdf.fontSize(27).text("Factura", 100, 100);
    pdf.fontSize(10).text(vari, 90, 150);
    pdf.end();
    return pdfName;
};
