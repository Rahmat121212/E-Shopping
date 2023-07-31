const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const {
  hashedPassword,
  createToken,
  comparePassword,
} = require("../services/authServices");
const CustomerModel = require("../models/Customer");
const DeliveryModel = require("../models/delivery");

// @route POST /api/register
// @access Public
// @desc Create user and return a token
module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body;
    try {
      const emailExist = await UserModel.findOne({ email });
      if (!emailExist) {
        const hashed = await hashedPassword(password);
        const user = await UserModel.create({
          name,
          email,
          password: hashed,
          admin: true,
        });
        const token = createToken({ id: user._id, name: user.name });
        return res
          .status(201)
          .json({ msg: "Admin account   has been created!", token });
      } else {
        // email already taken
        return res
          .status(400)
          .json({
            errors: [{ msg: `${email} is already taken`, param: "email" }],
          });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!");
    }
  } else {
    // validations failed
    return res.status(400).json({ errors: errors.array() });
  }
};
module.exports.getAdmin = async (req, res) => {
  const page = req.params.page;
  const perPage = 6;
  const skip = (page - 1) * perPage;
  try {
    const count = await UserModel.find({}).countDocuments();
    const response = await UserModel.find({})
      .skip(skip)
      .limit(perPage)
      .sort({ updatedAt: -1 });
    return res.status(200).json({ admin: response, perPage, count });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server internal error!");
  }
};
module.exports.fetcAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await UserModel.findOne({ _id: id });
    return res.status(200).json({ category: response });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server internal error!");
  }
};
module.exports.updateAdmin = async (req, res) => {
  const {name,email} = req.body;

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const exist = await UserModel.findOne({email});
    console.log("vvvcvc",exist);
    if (!exist) {
      const response = await UserModel.updateOne(
        { email },
        { $set: {name,email}}
      );
      return res
        .status(200)
        .json({ msg: "Your Admin  has been updated successfully!" });
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: `${email}  Email  Already Exist !` }] });
    }
  } else {
    return res.status(400).json({ errors: errors.array() });
  }
};

module.exports.deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ message: "Admin has been deleted successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server internal error!");
  }
};
module.exports.getCustomer = async (req, res) => {
  const page = req.params.page;
  const perPage = 7;
  const skip = (page - 1) * perPage;
  try {
    const count = await CustomerModel.find({}).countDocuments();
    const response = await CustomerModel.find({})
      .skip(skip)
      .limit(perPage)
      .sort({ updatedAt: -1 });
    return res.status(200).json({ admin: response, perPage, count });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server internal error!");
  }
};

module.exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    await CustomerModel.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ message: "Customer has been deleted successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server internal error!");
  }
};

module.exports.registerCustomer = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body;
    try {
      const emailExist = await CustomerModel.findOne({ email });
      console.log("C",emailExist);
      if (!emailExist) {
        const hashed = await hashedPassword(password);
        const user = await CustomerModel.create({
          name,
          email,
          password: hashed,
        });
        const token = createToken({ id: user._id, name: user.name });
        return res
          .status(201)
          .json({ msg: "Your account has been created!", token });
      } else {
        // email already taken
        return res
          .status(400)
          .json({
            errors: [{ msg: `${email} is already taken`, param: "email" }],
          });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!");
    }
  } else {
    // validations failed
    return res.status(400).json({ errors: errors.array() });
  }
};
module.exports.registerDelivery = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, contact, location } = req.body;
    try {
      const emailExist = await DeliveryModel.findOne({ email });
      if (!emailExist) {
        const user = await DeliveryModel.create({
          name,
          email,
          contact,
          location,
        });
        return res
          .status(201)
          .json({ msg: "Your Delivery Boy has been created!" });
      } else {
        // email already taken
        return res
          .status(400)
          .json({
            errors: [{ msg: `${email} is already taken`, param: "email" }],
          });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!");
    }
  } else {
    // validations failed
    return res.status(400).json({ errors: errors.array() });
  }
};
module.exports.getDelivery = async (req, res) => {
  const page = req.params.page;
  const perPage = 4;
  const skip = (page - 1) * perPage;
  try {
    const count = await DeliveryModel.find({}).countDocuments();
    const response = await DeliveryModel.find({})
      .skip(skip)
      .limit(perPage)
      .sort({ updatedAt: -1 });
    return res.status(200).json({ data: response, perPage, count });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server internal error!");
  }
};
module.exports.fetchDelivery = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await DeliveryModel.findOne({ _id: id });
    return res.status(200).json({ delivery: response });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server internal error!");
  }
};
module.exports.updateDelivery = async (req, res) => {
  const { _id, name, email, location, contact } = req.body;
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const exist = await DeliveryModel.findOne({ _id });
    if (exist) {
      const response = await DeliveryModel.updateOne(
        { _id },
        { $set: { name, email, location, contact } }
      );
      return res
        .status(200)
        .json({ msg: "Your Delivery Boy has been updated successfully!" });
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: `${name} Delivery Boy Not Found!` }] });
    }
  } else {
    return res.status(400).json({ errors: errors.array() });
  }
};
module.exports.deleteDelivery = async (req, res) => {
  const { id } = req.params;
  try {
    await DeliveryModel.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ msg: "Delivery Boy has been deleted successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server internal error!");
  }
};
// @route POST /api/login
// @access Public
// @desc Login user and return a token

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        if (await comparePassword(password, user.password)) {
          const token = createToken({ id: user._id, name: user.name });
          if (user.admin) {
            return res.status(201).json({ token, admin: true });
          } else {
            return res.status(201).json({ token, admin: false });
          }
        } else {
          return res
            .status(400)
            .json({
              errors: [{ msg: "password not matched!", param: "password" }],
            });
        }
      } else {
        return res
          .status(400)
          .json({
            errors: [{ msg: `${email} is not found!`, param: "email" }],
          });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!");
    }
  } else {
    //  validations failed
    return res.status(400).json({ errors: errors.array() });
  }
};
module.exports.loginCustomer = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const user = await CustomerModel.findOne({ email });
      if (user) {
        if (await comparePassword(password, user.password)) {
          const token = createToken({ id: user._id, name: user.name });
          if (user.admin) {
            return res.status(201).json({ token });
          } else {
            return res.status(201).json({ token });
          }
        } else {
          return res
            .status(400)
            .json({
              errors: [{ msg: "password not matched!", param: "password" }],
            });
        }
      } else {
        return res
          .status(400)
          .json({
            errors: [{ msg: `${email} is not found!`, param: "email" }],
          });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!");
    }
  } else {
    //  validations failed
    return res.status(400).json({ errors: errors.array() });
  }
};
