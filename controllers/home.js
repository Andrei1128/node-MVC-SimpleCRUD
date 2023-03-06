const angajat = require("../models/angajat");

const getAngajat = (req, res) => {
  const angajatGasit = angajat.findById(req.params.id);
  res.render("templates/angajat.ejs", { angajat: angajatGasit });
};
const getAngajati = (req, res) => {
  const angajati = angajat.find({});
  res.render("templates/home.ejs", { angajati });
};
const addAngajat = (req, res) => {
  const angajatNou = new angajat(req.body);
  angajatNou.save();
  res.redirect("/home");
};
const updateAngajat = (req, res) => {
  angajat.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/home");
};
const deleteAngajat = (req, res) => {
  angajat.findByIdAndDelete(req.params.id);
  res.redirect("/home");
};

module.exports = {
  getAngajat,
  getAngajati,
  addAngajat,
  updateAngajat,
  deleteAngajat,
};
