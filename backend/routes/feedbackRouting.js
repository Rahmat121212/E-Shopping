const express = require("express");
const feedbackValidatons = require("../validations/feedbackValidatons");
const FeedBack = require("../controllers/FeedBack");

const router = express.Router();
router.post("/create",feedbackValidatons,FeedBack.create);
router.get("/getData/:page",FeedBack.getData);
router.delete("/feedbackDelete/:id",FeedBack.deletefeedback);
module.exports = router;