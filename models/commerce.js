const mongoose = require('mongoose')

const commerceSchema = new mongoose.Schema({
    accessory_type: String,
    price: Number,
    colors:[String],
    brand: String,
    isPublished:{
        type: Boolean,
        default:false
    }

});

const Accessorize = mongoose.model('Accessory', commerceSchema);
module.exports = Accessorize;