const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando servidor
const app = express();
app.use(express.json());
app.use(cors());

//conectando com DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
});

//importando model
requireDir("./src/model");

//rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
