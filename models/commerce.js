const mongoose = require('mongoose')

const commerceSchema = new mongoose.Schema({
    name: String,
    price: Number,
    Brand: String,
    isPublished:{
        type: Boolean,
        default:false
    }

});

const Electronics = mongoose.model('electronic', commerceSchema);

module.exports = Electronics;