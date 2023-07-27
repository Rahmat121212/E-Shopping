const express = require("express");
const {registerValidations,loginValidations} = require("../validations/userValidations");
const {register, login, registerCustomer, loginCustomer} = require("../controllers/usersController");
const router = express.Router();
router.post("/register",registerValidations, register);
router.post("/CustomerRegister",registerValidations, registerCustomer);
router.post('/login',loginValidations, login);
router.post('/customerLogin',loginValidations, loginCustomer);
module.exports = router;