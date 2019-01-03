const User = require('./UserModel');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    content: {
        type: String,
        required: true
    },

    category: [{
        type: String,
        default: 'blog'
    }]

    dateCreadted: {
        type: Date,
        default: Date.now
    },

    dateUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);