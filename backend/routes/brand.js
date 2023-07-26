const express = require("express");
const router = express.Router();
const Brands = require("../controllers/brandController");

// Create a Flex entry
router.post("/brand",Brands.create);

// Read all Flex entries
router.get("/brand/:page", Brands.getBrand);

// Read a specific Flex entry by ID
router.get("/fetchbrand/:id", Brands.fetchBrand);

// Update a specific Flex entry by ID
router.put("/brand/:id", Brands.updateBrand);
router.put("/brand-image/:id", Brands.updateBrandimage);
// Delete a specific Flex entry by ID
router.delete("/brand/:id", Brands.deleteBrand);

// Get all Flex categories
router.get("/brands", Brands.allBrands);

module.exports = router;
