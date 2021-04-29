//content was taken from lecture and demo videos retreval date: 4/28/21 for CRUD.

var express = require('express');
var router = express.Router();
var memCnt1 = require("../controllers/memberController.js");
const Member = require("../models/member");

router.get("/", memCnt1.findAll);
router.post("/", memCnt1.create);

<<<<<<< HEAD
//router.put("/", memCnt1.Update);
=======
// router.put("/", memCnt1.Update);

>>>>>>> ddf2463e4a57fdb3de388b0dd84d552ecdc5e202
router.delete("/:_id", memCnt1.delete);

module.exports = router;