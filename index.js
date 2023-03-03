require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const angajatSchema = new mongoose.Schema({
  nume: { type: String },
  prenume: { type: String },
  email: { type: String },
  salariu: { type: String },
  data: { type: String },
});
const angajat = mongoose.model("angajat", angajatSchema);

app.engine("ejs", ejsMate);
app.set("views", __dirname + "/views");
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", async (req, res) => {
  var angajati = await angajat.find({});
  res.render("templates/home.ejs", { angajati });
});

app.get("/home/:id", async (req, res) => {
  const angajatGasit = await angajat.findById(req.params.id);
  res.render("templates/angajat.ejs", { angajat: angajatGasit });
});

app.post("/home", async (req, res) => {
  var angajatNou = new angajat(req.body);
  await angajatNou.save();
  res.redirect("/home");
});

app.delete("/home/:id", async (req, res) => {
  await angajat.findByIdAndDelete(req.params.id);
  res.redirect("/home");
});

app.put("/home/:id", async (req, res) => {
  await angajat.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/home");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
