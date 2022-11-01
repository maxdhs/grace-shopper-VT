const express = require("express");
const bookRouter = require("./books");

const apiRouter = express.Router();

apiRouter.use("/books", bookRouter);

module.exports = apiRouter;
