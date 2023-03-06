const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    decription:{
        type: String,
        required: true,
        
    },
    price:{
        type: String,
        required: true,

    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    }
}); 

module.exports = mongoose.model('Product', productSchema);