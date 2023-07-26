const {body} = require("express-validator");
module.exports = [
    body('name').not().isEmpty().trim().escape().withMessage('Name is required'),
    body('email').not().isEmpty().trim().escape().withMessage('email is required'),
    body('subject').not().isEmpty().trim().escape().withMessage('subject is required'),
    body('message').not().isEmpty().trim().escape().withMessage('message is required'),
];