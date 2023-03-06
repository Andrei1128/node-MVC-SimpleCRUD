const express = require("express");
const router = express.Router();

const {
  getAngajat,
  getAngajati,
  updateAngajat,
  deleteAngajat,
  addAngajat,
} = require("../controllers/home");

router.get("/home", getAngajati);
router.get("/home/:id", getAngajat);
router.post("/home", addAngajat);
router.put("/home/:id", updateAngajat);
router.delete("/home/:id", deleteAngajat);

module.exports = router;
