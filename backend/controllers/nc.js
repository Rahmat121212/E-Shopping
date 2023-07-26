const ND = require("../models/N")
class Nc {
     async create (req, res){
            const {name} = req.body;
            try {
                    const user = await ND.create({
                        name,
                    });
                    return res.status(201).json({msg: 'Your account has been created!'});
                
            } catch (error) {
                console.log(error.message);
                return res.status(500).json("Server internal error!");
            }
        } 
        async get(req, res) {
            const page = req.params.page;
            const perPage = 3;
            const skip = (page - 1) * perPage;
        
            try {
              const count = await ND.find({}).countDocuments();
              const response = await ND.find({})
                .skip(skip)
                .limit(perPage)
                .sort({ updatedAt: -1 });
        
              return res.status(200).json({ n : response, perPage, count });
            } catch (error) {
              console.log(error.message);
              return res.status(500).json("Server internal error!");
            }
          }
    
}
module.exports = new Nc();