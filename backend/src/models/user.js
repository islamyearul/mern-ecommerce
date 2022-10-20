
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    firstname: { 
        type: String, 
        required: true,
        trim : true,
        min : 3,
        max : 20
    },
    lastname: {
        type: String, 
        required: true,
        trim : true,
        min : 3,
        max : 20
    },
    username: {
        type: String,
        required: true,
        trim : true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim : true,
        lowercase: true,
        min : 3,
        max : 100,
        // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    hash_password: { 
        type: String, 
        required: true,
    
     },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    contactNumber: {
        type: String,

    },
    profilePicture: {
        type: String,
    },

}, { timestamps: true });



UserSchema.virtual('password')
    .set(function(password) {
        this.hash_password = bcrypt.hashSync(password, 10);
    });

UserSchema.virtual('fullName')
    .get(function() {
        return `${this.firstname} ${this.lastname}`;
    });
    

UserSchema.methods = {
    authenticate: function(password) {
        return bcrypt.compareSync(password, this.hash_password);
    }
}


module.exports = mongoose.model('users', UserSchema);