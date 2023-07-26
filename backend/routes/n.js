const express = require("express");
const router = express.Router()
const Nc = require("../controllers/nc")
router.post("/n", Nc.create);
router.get("/ns/:page", Nc.get);
module.exports = router;