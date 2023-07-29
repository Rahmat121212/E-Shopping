const { validationResult } = require("express-validator");
const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const BrandDB = require("../models/Brands");

class Brands {
    async create(req, res) {
        const form = formidable({ multiples: true });
        form.parse(req, async (err, fields, files) => {
          console.log("fields----------->", fields);
          if (!err) {
            const parsedData = JSON.parse(fields.data);
    
            const errors = [];
            if (errors.length === 0) {
              const { name } = JSON.parse(fields.data);
              const exit = await BrandDB.findOne({ name });
              if (exit) {
                errors.push({ msg: "Brand Name is Already Exist" });
              }
              if (parsedData.name.trim().length === 0) {
                errors.push({ msg: "Brand Name is required" });
              }
              if (!files["image"]) {
                errors.push({ msg: "Image is required" });
              }
              
              if (errors.length === 0) {
                const images = {};
    
                const mimeType = files[`image`].mimetype;
                const extension = mimeType.split("/")[1].toLowerCase();
                if (
                  extension === "jpeg" ||
                  extension === "jpg" ||
                  extension === "png"
                ) {
                  const imageName = uuidv4() + `.${extension}`;
                  const __dirname = path.resolve();
                  const newPath =
                    __dirname + `/../client/public/uploads/brand/${imageName}`;
                  images[`image`] = imageName;
                  fs.copyFile(files[`image`].filepath, newPath, (err) => {
                    if (err) {
                      console.log(err);
                    }
                  });
                } else {
                  const error = {};
                  error["msg"] = `image has invalid ${extension} type`;
                  errors.push(error);
                }
    
                if (errors.length === 0) {
                  try {
                    const { name, url } = JSON.parse(fields.data);
                    const response = await BrandDB.create({
                      name: name,
                      image: images["image"],
                      
                    });
                    return res
                      .status(201)
                      .json({ msg: "Brand has been created", response });
                  } catch (error) {
                    console.log(error);
                    return res.status(500).json(error);
                  }
                } else {
                  return res.status(400).json({ errors });
                }
              } else {
                return res.status(400).json({ errors });
              }
            } else {
              return res.status(400).json({ errors });
            }
          }
        });
      }
      async imageUpdate(req, res) {
        const form = formidable({ multiples: true });
        form.parse(req, async (err, fields, files) => {
          console.log("fgggggggg--------->", fields?.id);
          if (!err) {
            const errors = [];
            if (errors.length === 0) {
              if (!files["image"]) {
                errors.push({ msg: "Image is required" });
              }
              if (errors.length === 0) {
                const images = {};
                const mimeType = files[`image`].mimetype;
                const extension = mimeType.split("/")[1].toLowerCase();
                if (
                  extension === "jpeg" ||
                  extension === "jpg" ||
                  extension === "png"
                ) {
                  const imageName = uuidv4() + `.${extension}`;
                  const __dirname = path.resolve();
                  const newPath =
                    __dirname + `/../client/public/uploads/brand/${imageName}`;
                  images[`image`] = imageName;
                  fs.copyFile(files[`image`].filepath, newPath, (err) => {
                    if (err) {
                      console.log(err);
                    }
                  });
                } else {
                  const error = {};
                  error["msg"] = `image has invalid ${extension} type`;
                  errors.push(error);
                }
                // }
                if (errors.length === 0) {
                  try {
                    const response = await BrandDB.updateOne(
                      { _id: fields?.id },
                      { $set: { image: images["image"]}}
                      );
                    return res
                      .status(201)
                      .json({ msg: "Brand Image has Updated !", response });
                  } catch (error) {
                    console.log(error);
                    return res.status(500).json(error);
                  }
                } else {
                  return res.status(400).json({ errors });
                }
              } else {
                return res.status(400).json({ errors });
              }
            } else {
              return res.status(400).json({ errors });
            }
          }
        });
      }
      async getBrand(req, res) {
        const page = req.params.page;
        const perPage = 3;
        const skip = (page - 1) * perPage;
    
        try {
          const count = await BrandDB.find({}).countDocuments();
          const response = await BrandDB.find({})
            .skip(skip)
            .limit(perPage)
            .sort({ updatedAt: -1 });
    
          return res.status(200).json({brand: response, perPage, count });
        } catch (error) {
          console.log(error.message);
          return res.status(500).json("Server internal error!");
        }
      }
    
      async fetchBrand(req, res) {
        const { id } = req.params;
        console.log(",,,,",id);
        try {
          const response = await BrandDB.findOne({ _id : id });
          return res.status(200).json({ brand: response });
        } catch (error) {
          console.log(error.message);
          return res.status(500).json("Server internal error!");
        }
      }
    
     
    
    
      async updateBrand(req, res) {
        const { id } = req.params;
        const { name, image} = req.body;
        const errors = validationResult(req);
    
        if (errors.isEmpty()) {
          const exist = await BrandDB.findOne({ name });
    
          if (!exist) {
            const response = await BrandDB.updateOne(
              { _id: id },
              { $set: { name, image } }
            );
            return res
              .status(200)
              .json({ message: "Your Brand has been updated successfully!" });
          } else {
            return res
              .status(400)
              .json({ errors: [{ msg: `${name} Brand already exists` }] });
          }
        } else {
          return res.status(400).json({ errors: errors.array() });
        }
      }
    
      async deleteBrand(req, res) {
        const { id } = req.params;
    
        try {
          await BrandDB.deleteOne({ _id: id });
          return res
            .status(200)
            .json({ message: "Brand has been deleted successfully!" });
        } catch (error) {
          console.log(error.message);
          return res.status(500).json("Server internal error!");
        }
      }
    
      async allBrands(req, res) {
        try {
          const brands = await BrandDB.find({});
          return res.status(200).json({ brands });
        } catch (error) {
          return res.status(500).json("Server internal error!");
        }
      }
}
module.exports = new Brands();