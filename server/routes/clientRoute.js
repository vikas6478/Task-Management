const express = require("express");
const routes = express.Router();
const ClientController = require("../controllers/clientController");

routes.post("/userlogin",ClientController.userLogin)
routes.get("/mytask", ClientController.myTaskList);
routes.get("/completetask", ClientController.taskComplete);
routes.post("/passreset", ClientController.PassReset);

module.exports= routes;