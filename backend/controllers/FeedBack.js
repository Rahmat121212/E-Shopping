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
    async getData(req, res) {
        const page = req.params.page;
        const perPage = 7;
        const skip = (page - 1) * perPage;
    
        try {
          const count = await feedbackModel.find({}).countDocuments();
          const response = await feedbackModel.find({})
            .skip(skip)
            .limit(perPage)
            .sort({ updatedAt: -1 });
    
          return res.status(200).json({ data: response, perPage, count });
        } catch (error) {
          console.log(error.message);
          return res.status(500).json("Server internal error!");
        }
      }
      async deletefeedback(req, res) {
        const { id } = req.params;
    
        try {
          await feedbackModel.deleteOne({ _id: id });
          return res
            .status(200)
            .json({ message: "feedback has been deleted successfully!" });
        } catch (error) {
          console.log(error.message);
          return res.status(500).json("Server internal error!");
        }
      }
    
}
module.exports = new FeedBack();