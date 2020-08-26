"use strict";

var express = require("express");

var apiRouter = require("./router/api");

var db = require("./models");

var cors = require("cors");

var port = 3075;
db.sequelize.sync().then(function () {
  console.log("db connect");
})["catch"](console.error);
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use("/api", apiRouter);
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(port, function () {
  console.log("Listening on port ".concat(port));
});