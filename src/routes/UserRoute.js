const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/list", userController.getList);

module.exports = router;
