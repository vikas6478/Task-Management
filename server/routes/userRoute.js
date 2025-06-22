const express = require("express")
const routes = express.Router();
const UserController = require("../controllers/userController")

routes.post("/registration",UserController.Registration);
routes.post("/login",UserController.login);
routes.post("/usercreation", UserController.createUser);
routes.get("/showuserdata", UserController.showUserData);
routes.post("/assigntask", UserController.assignTask);
routes.get("/taskdetail", UserController.taskDetail);
routes.get("/changetaskstatus", UserController.changeTaskStatus);
routes.post("/taskdelete", UserController.TaskDelete);


module.exports = routes