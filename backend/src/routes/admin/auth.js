const express = require('express');
const router = express.Router();   // create express app
const User = require('../../models/user');
const UserController = require('../../controllers/admin/auth');
// const {check} = require ('express-validator');
const {validateSignupRequest, isRequestValidate, validateSigninRequest} = require ('../../validator/auth');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello World'
    });
    }
);
router.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
    }
); 

router.post('/api/admin/signup', validateSignupRequest,isRequestValidate, UserController.create);
router.post('/api/admin/signin',validateSigninRequest,isRequestValidate,  UserController.signin);

module.exports = router;