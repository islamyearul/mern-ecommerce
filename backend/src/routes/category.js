const express = require('express');
const router = express.Router();   // create express app
const Category = require('../models/category');
const {addCategory, getCategories} = require('../controllers/category');
const { requireSignin, adminMiddleware, userMiddleware,  } = require('../common-middleware');

router.post('/api/category/create',requireSignin, adminMiddleware, addCategory);
router.get('/api/category/getcategories' ,requireSignin, adminMiddleware, getCategories);





module.exports = router;