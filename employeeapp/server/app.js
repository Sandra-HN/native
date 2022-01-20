const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./Employee");
const Employee = mongoose.model("employee");
const mongouri =
  "mongodb+srv://sandra:sandra.1995@cluster0.yljc7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongouri, {
  useNewUrlParser: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("error", err);
});

app.get("/", (req, res) => {
  res.send("welcome to node js");
});

app.listen(3000, () => {
  console.log("server running");
});
