const mongoose = require('mongoose');


const CategorySchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    slug: {

        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    parentId: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);
