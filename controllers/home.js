const angajat = require("../models/angajat");

const getAngajat = async (req, res) => {
  const angajatGasit = await angajat.findById(req.params.id);
  res.render("templates/angajat.ejs", { angajat: angajatGasit });
};
const getAngajati = async (req, res) => {
  const angajati = await angajat.find({});
  res.render("templates/home.ejs", { angajati });
};
function validator(req) {
  console.log(req);
  if (
    req.nume.length >= 3 &&
    req.prenume.length >= 3 &&
    req.email.length >= 8 &&
    req.salariu >= 0 &&
    req.data.length >= 8
  )
    return true;
  return false;
}
const addAngajat = async (req, res) => {
  if (validator(req.body)) {
    const angajatNou = new angajat(req.body);
    await angajatNou.save();
  }
  res.redirect("/home");
};
const updateAngajat = async (req, res) => {
  if (validator(req.body))
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
