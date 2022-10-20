const express = require('express');
const router = express.Router();   // create express app
const Products = require('../models/products');
const {addProducts} = require('../controllers/products');
const multer = require('multer');

const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
  const upload = multer({ storage });

const { requireSignin, adminMiddleware, userMiddleware,  } = require('../common-middleware');

router.post('/api/product/create',requireSignin, adminMiddleware, upload.array('ProductPicture', 12), addProducts);
router.get('/api/product/getproducts' ,requireSignin, adminMiddleware);





module.exports = router;