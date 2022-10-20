
const jwt = require('jsonwebtoken');


//  login check

exports.requireSignin = (req, res, next) => {
    if (!req.headers.authorization) {
       
        return res.status(400).json({ message: 'Authorization Requiredd' });
    }
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
   
}

// User Access
exports.userMiddleware = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(400).json({ message: 'User Access Denied' });
    }
    next();
}

// Admin Access
exports.adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(400).json({ message: 'Admin Access Denied' });
    }
    next();
}