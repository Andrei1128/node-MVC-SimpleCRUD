const angajat = require("../models/angajat");

const getAngajat = async (req, res) => {
  const angajatGasit = await angajat.findById(req.params.id);
  res.render("templates/angajat.ejs", { angajat: angajatGasit });
};
const getAngajati = async (req, res) => {
  const angajati = await angajat.find({});
  res.render("templates/home.ejs", { angajati });
};
const addAngajat = async (req, res) => {
  const angajatNou = new angajat(req.body);
  await angajatNou.save();
  res.redirect("/home");
};
const updateAngajat = async (req, res) => {
  await angajat.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/home");
};
const deleteAngajat = async (req, res) => {
  await angajat.findByIdAndDelete(req.params.id);
  res.redirect("/home");
};

module.exports = {
  getAngajat,
  getAngajati,
  addAngajat,
  updateAngajat,
  deleteAngajat,
};
