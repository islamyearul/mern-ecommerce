const slugify = require('slugify');
const Product = require('../models/products');
const multer = require('multer');
// const shortid = require('shortid');



exports.addProducts = (req, res, next) => {
    // const productObj = {
    //     name: req.body.name,
    //     slug: slugify(req.body.name),
    //     price: req.body.price,
    //     quantity: req.body.quantity,
    //     description: req.body.description,
    //     offer: req.body.offer,
    //     productPictures: req.body.productPictures,
    //     category: req.body.category,
    //     createdBy: req.body.createdBy,
    // }
    // const product = new Product(productObj);
    // product.save((error, product) => {
    //     if (error) return res.status(400).json({ error });
    //     if (product) {
    //         return res.status(201).json({ product });
    //     }
    // });
   
    res.status(200).json({ file: req.files, body: req.body });

}