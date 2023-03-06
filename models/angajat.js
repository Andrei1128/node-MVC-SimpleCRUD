const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const angajatSchema = new mongoose.Schema({
  nume: { type: String },
  prenume: { type: String },
  email: { type: String },
  salariu: { type: Number },
  data: { type: Date },
});
const angajat = mongoose.model("angajat", angajatSchema);

module.exports = angajat;
