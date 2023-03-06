const mongoose = require("mongoose");

const angajatSchema = new mongoose.Schema({
  nume: { type: String },
  prenume: { type: String },
  email: { type: String },
  salariu: { type: String },
  data: { type: String },
});
const angajat = mongoose.model("angajat", angajatSchema);

module.exports = angajat;
