const express = require("express");
const apiRouter = require("./router/api");

const app = express();

const port = 3075;

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
