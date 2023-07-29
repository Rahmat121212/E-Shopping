const express = require("express");
const router = express.Router();
const FlexController = require("../controllers/Flex");
const flexValidtion = require("../validations/flexValidtion");

// Create a Flex entry
router.post("/flex", FlexController.create);

// Read all Flex entries
router.get("/flex/:page", FlexController.flexs);

// Read a specific Flex entry by ID
router.get("/single-flex/:id", FlexController.fetchFlex);

// Update a specific Flex entry by ID
router.put("/flex-update",flexValidtion , FlexController.updateFlex);
router.put("/flex-update-image",FlexController.imageUpdate);

// Delete a specific Flex entry by ID
router.delete("/flex-delete/:id", FlexController.deleteFlex);

// Get all Flex categories
router.get("/flexs", FlexController.allFlexs);

// Get random Flex categories
router.get("/flexs/random", FlexController.randomFlexs);

module.exports = router;
