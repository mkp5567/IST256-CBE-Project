var express = require('express');
var router = express.Router();
var memCnt1 = require("../controllers/memberController.js");
const Member = require("../models/member");

router.get("/", memCnt1.findAll);
router.post("/", memCnt1.create);
router.delete("/:_id", memCnt1.delete);

module.exports = router;