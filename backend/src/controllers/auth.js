
var User = require('../models/user');
const jwt = require('jsonwebtoken');

// Create and Save a new User

exports.create = (req, res, next) => {
    
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if (user) return res.status(400).json({
            message: 'User already registered'
        });
        const {
            firstname,
            lastname,
            email,
            password
        } = req.body;
        const _user = new User({
            firstname,
            lastname,
            email,
            password,
            username: Math.random().toString(),
            role: 'admin'
        });
        _user.save((error, data) => {
            if (error) {
                return res.status(400).json({
                    message: 'Something went wrong'
                });
            }
            if (data) {
                return res.status(201).json({
                    message: 'User created successfully..!'
                });
            }
        });
    });
}

//Sign in
exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if (error) return res.status(400).json({ error });
        if (user) {
            if (user.authenticate(req.body.password) && user.role === 'admin') {
                const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                const { _id, firstname, lastname, email, role, fullName } = user;
                res.status(200).json({
                    token,
                    user: { _id, firstname, lastname, email, role, fullName }
                });
            } else {
                return res.status(400).json({
                    message: 'Invalid Password Or Role'
                });
            }
        } else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    });
}

