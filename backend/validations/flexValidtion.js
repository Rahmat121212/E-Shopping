const {body} = require("express-validator");
module.exports = [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('url').not().isEmpty().withMessage('Url is required'),
  
];