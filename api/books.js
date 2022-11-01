const express = require("express");

const bookRouter = express.Router();

bookRouter.get("/", (req, res) => {
  res.send({ books: [] });
});

module.exports = bookRouter;
