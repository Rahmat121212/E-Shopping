const { validationResult } = require("express-validator");
const feedbackModel = require("../models/FeedBack");;

class FeedBack {
    async create(req, res) {
        const errors = validationResult(req);
        console.log("DDDDD___>",req.body);
        if(errors.isEmpty()){
            const {name, email, subject,message} = req.body;
            try { 
                    const user = await feedbackModel.create({
                        name,
                        email,
                        subject,
                        message
                    });
                    return res.status(201).json({msg: 'Your Message has been Send Successfully!'});
                
            } catch (error) {
                console.log(error.message);
                return res.status(500).json("Server internal error!");
            }
        } else {
            // validations failed
            return res.status(400).json({errors: errors.array()})
        }
    }
}
module.exports = new FeedBack();