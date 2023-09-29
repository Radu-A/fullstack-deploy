const express = require("express");
const providersController = require("../controllers/providersController");
const providersRouter = express.Router();

providersRouter.get("/", providersController.getProviders);

module.exports = providersRouter;
