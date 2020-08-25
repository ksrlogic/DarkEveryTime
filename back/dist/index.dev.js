"use strict";

var express = require("express");

var apiRouter = require("./router/api");

var app = express();
var port = 3075;
app.use("/api", apiRouter);
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(port, function () {
  console.log("Listening on port ".concat(port));
});