const express = require("express");

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  res.send("api router working");
});

module.exports = apiRouter;
