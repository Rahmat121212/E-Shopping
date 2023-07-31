const express = require("express");
const {
  registerValidations,
  loginValidations,
  deliveryValidations,
  adminEmailValidations,
  adminDataValidation,
} = require("../validations/userValidations");
const {
  register,
  login,
  registerCustomer,
  loginCustomer,
  getAdmin,
  deleteAdmin,
  getCustomer,
  deleteCustomer,
  registerDelivery,
  getDelivery,
  updateDelivery,
  fetchDelivery,
  deleteDelivery,
  fetcAdmin,
  updateAdmin,
  updateDataAdmin,
} = require("../controllers/usersController");
const router = express.Router();
router.post("/register", registerValidations, register);
router.get("/getAdmin/:page", getAdmin);
router.get("/fetch-admin/:id", fetcAdmin);
router.put("/update-admin", adminEmailValidations, updateAdmin);
router.get("/get-customer/:page", getCustomer);
router.delete("/delete-customer/:id", deleteCustomer);
router.delete("/delete-admin/:id", deleteAdmin);
router.post("/CustomerRegister", registerValidations, registerCustomer);
router.post("/login", loginValidations, login);
router.post("/customerLogin", loginValidations, loginCustomer);

router.post("/registerDelivery", deliveryValidations, registerDelivery);
router.get("/get-Delivery/:page", getDelivery);
router.get("/get-Delivery-single/:id", fetchDelivery);
router.delete("/delete-Delivery-single/:id", deleteDelivery);
router.put("/updateDelivery", deliveryValidations, updateDelivery);
module.exports = router;
