
var express = require("express");
var router = express.Router();
var bookRoomModule = require('../Modules/bookRoomModule')
var userModule=require('../Modules/userModule')

router.get("/get", bookRoomModule.getHallbooking);
router.post("/create", bookRoomModule.createHallbooking);
router.post("/user", bookRoomModule.createuser);
router.post("/create/createfind", userModule.createFind);

module.exports = router;