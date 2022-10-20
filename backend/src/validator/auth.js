

const {check, validationResult } = require ('express-validator');

exports.validateSignupRequest = 

    [
        check('firstname')
        .notEmpty()
        .withMessage('First Name is required'),
        check('lastname')
        .notEmpty()
        .withMessage('Last Name is required'),
        check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
        check('password')
        .isLength({ min: 3 })
        .withMessage('password Must be at least 3 chars long')
    
    ]
exports.validateSigninRequest = 

    [
       
        check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
        check('password')
        .isLength({ min: 3 })
        .withMessage('password Must be at least 3 chars long')
    
    ]


exports.isRequestValidate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
}
