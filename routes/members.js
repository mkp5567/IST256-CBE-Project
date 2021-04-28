const express = require("express");
const router = express.Router();
const memCntl = require("../controllers/memberController.js");
const Member = require("../models/member");

router.get("/", memCntl.findAll);
router.post("/", memCntl.create);
router.delete("/:_id", memCntl.delete);

module.exports = router;