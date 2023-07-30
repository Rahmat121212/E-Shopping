const {body} = require("express-validator");
module.exports.registerValidations = [
    body('name').not().isEmpty().trim().escape().withMessage('name is required'),
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('email is required'),
    body('password').isLength({min: 5}).withMessage('password should be 5 characters long')
]

module.exports.loginValidations = [
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('email is required'),
    body('password').not().isEmpty().withMessage('password is required')
]
module.exports.deliveryValidations = [
    body('name').not().isEmpty().trim().escape().withMessage('name is required'),
    body('contact').not().isEmpty().trim().escape().withMessage('Contact is required'),
    body('location').not().isEmpty().trim().escape().withMessage('Location is required'),
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('email is required'),
]
