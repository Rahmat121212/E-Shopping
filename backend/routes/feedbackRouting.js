const express = require("express");
const feedbackValidatons = require("../validations/feedbackValidatons");
const FeedBack = require("../controllers/FeedBack");

const router = express.Router();
router.post("/create",feedbackValidatons,FeedBack.create);
module.exports = router;