const mongoose = require('mongoose');
const { randomUUID } = require('crypto');
const { Schema } = mongoose;

const Product = mongoose.model('Product', new Schema({
    uuid: {
        type: String,
        unique: true,
        required: true,
        default: () => randomUUID()
    },
    code: {
        type: String,
        maxLength: 7,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}));

module.exports = Product;