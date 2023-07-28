const {validationResult} = require("express-validator");
const UserModel = require("../models/User");
const {hashedPassword, createToken,comparePassword} = require("../services/authServices");
const CustomerModel = require("../models/Customer");

// @route POST /api/register
// @access Public
// @desc Create user and return a token
module.exports.register = async (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const {name, email, password} = req.body;
        try {
            const emailExist = await UserModel.findOne({email});
            if(!emailExist) {
                const hashed = await hashedPassword(password);
                const user = await UserModel.create({
                    name,
                    email,
                    password: hashed,
                    admin : true
                });
                const token = createToken({id: user._id, name: user.name});
                return res.status(201).json({msg: 'Admin account   has been created!', token});
            } else {
                // email already taken
                return res.status(400).json({errors: [{msg: `${email} is already taken`, param: 'email'}]})
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json("Server internal error!");
        }
    } else {
        // validations failed
        return res.status(400).json({errors: errors.array()})
    }
}
module.exports.getAdmin = async(req, res)=>{
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
  }

module.exports.deleteAdmin = async(req, res) => {
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
    
  }
module.exports.getCustomer = async(req, res)=>{
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
  }

module.exports.deleteCustomer = async(req, res) => {
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
    
  }

module.exports.registerCustomer = async (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const {name, email, password} = req.body;
        try {
            const emailExist = await CustomerModel.findOne({email});
            if(!emailExist) {
                const hashed = await hashedPassword(password);
                const user = await CustomerModel.create({
                    name,
                    email,
                    password: hashed,
                    
                });
                const token = createToken({id: user._id, name: user.name});
                return res.status(201).json({msg: 'Your account has been created!', token});
            } else {
                // email already taken
                return res.status(400).json({errors: [{msg: `${email} is already taken`, param: 'email'}]})
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json("Server internal error!");
        }
    } else {
        // validations failed
        return res.status(400).json({errors: errors.array()})
    }
}

// @route POST /api/login
// @access Public
// @desc Login user and return a token

module.exports.login = async (req, res) => {
     const {email, password} = req.body;
     const errors = validationResult(req);
     if(errors.isEmpty()) {
         try {
             const user = await UserModel.findOne({email});
             if(user) {
                  if(await comparePassword(password, user.password)) {
                     const token = createToken({id: user._id, name: user.name});
                     if(user.admin) {
                        return res.status(201).json({token, admin: true});
                     } else {
                        return res.status(201).json({token, admin: false});
                     }
                  } else {
                      return res.status(400).json({errors: [{msg: 'password not matched!', param: 'password'}]})
                  }
             } else {
                 return res.status(400).json({errors: [{msg: `${email} is not found!`, param: 'email'}]});
             }
         } catch (error) {
             console.log(error.message)
             return res.status(500).json('Server internal error!');
         }
     } else {
        //  validations failed
        return res.status(400).json({errors: errors.array()})
     }
}
module.exports.loginCustomer = async (req, res) => {
     const {email, password} = req.body;
     const errors = validationResult(req);
     if(errors.isEmpty()) {
         try {
             const user = await CustomerModel.findOne({email});
             if(user) {
                  if(await comparePassword(password, user.password)) {
                     const token = createToken({id: user._id, name: user.name});
                     if(user.admin) {
                        return res.status(201).json({token});
                     } else {
                        return res.status(201).json({token});
                     }
                  } else {
                      return res.status(400).json({errors: [{msg: 'password not matched!', param: 'password'}]})
                  }
             } else {
                 return res.status(400).json({errors: [{msg: `${email} is not found!`, param: 'email'}]});
             }
         } catch (error) {
             console.log(error.message)
             return res.status(500).json('Server internal error!');
         }
     } else {
        //  validations failed
        return res.status(400).json({errors: errors.array()})
     }
}
