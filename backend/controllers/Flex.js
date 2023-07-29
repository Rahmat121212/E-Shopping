const { validationResult } = require("express-validator");
const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const flexDB = require("../models/Flex")
class FlexController {
  async create(req, res) {
    const form = formidable({ multiples: true });
    form.parse(req, async (err, fields, files) => {
      console.log("fields----------->", fields);
      if (!err) {
        const parsedData = JSON.parse(fields.data);

        const errors = [];
        if (errors.length === 0) {
          const { name } = JSON.parse(fields.data);
          const exit = await flexDB.findOne({ name });
          if (exit) {
            errors.push({ msg: "Name is Already Exist" });
          }
          if (parsedData.name.trim().length === 0) {
            errors.push({ msg: "name is required" });
          }
          if (!files["image"]) {
            errors.push({ msg: "Image is required" });
          }
          if (parsedData.url.trim().length === 0) {
            errors.push({ msg: "url is required" });
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
                __dirname + `/../client/public/uploads/flexs/${imageName}`;
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
                const response = await flexDB.create({
                  name: name,
                  image: images["image"],
                  url: url,
                });
                return res
                  .status(201)
                  .json({ msg: "flex has been created", response });
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
                __dirname + `/../client/public/uploads/flexs/${imageName}`;
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
                const response = await flexDB.updateOne(
                  { _id: fields?.id },
                  { $set: { image: images["image"]}}
                  );
                return res
                  .status(201)
                  .json({ msg: "Flex Image has Updated !", response });
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

  async flexs(req, res) {
    const page = req.params.page;
    const perPage = 3;
    const skip = (page - 1) * perPage;

    try {
      const count = await flexDB.find({}).countDocuments();
      const response = await flexDB.find({})
      .skip(skip)
      .limit(perPage)
      .sort({ updatedAt: -1 });

      return res.status(200).json({ flex: response, perPage, count });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!");
    }
  }

  async fetchFlex(req, res) {
    const { id } = req.params;
    
    try {
      const response = await flexDB.findOne({ _id: id });
      return res.status(200).json({ flex: response });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!");
    }
  }

  async updateFlex(req, res) {
    const {_id,name,url} = req.body;
    console.log("LLbbbbbbbb",_id);
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const exist = await flexDB.findOne({ _id});
      if (exist) {
        const response = await flexDB.updateOne(
          { _id },
          { $set: { name, url}}
        );
        return res
          .status(200)
          .json({ msg: "Your flex has been updated successfully!" });
      } else {
        return res
          .status(400)
          .json({ errors: [{ msg: `${name} Flex Not Found` }] });
      }
    } else {
      return res.status(400).json({ errors: errors.array() });
    }
  }

  async deleteFlex(req, res) {
    const { id } = req.params;

    try {
      await flexDB.deleteOne({ _id: id });
      return res
        .status(200)
        .json({ message: "Flex has been deleted successfully!" });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!");
    }
  }

  async allFlexs(req, res) {
    try {
      const categories = await flexDB.find({});
      return res.status(200).json({ categories });
    } catch (error) {
      return res.status(500).json("Server internal error!");
    }
  }

  async randomFlexs(req, res) {
    try {
      const categories = await flexDB.aggregate([{ $sample: { size: 3 } }]);
      return res.status(200).json({ categories });
    } catch (error) {
      return res.status(500).json("Server internal error!");
    }
  }
}

module.exports = new FlexController();
