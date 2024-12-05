const { string, required } = require('joi');
const mongoose = require('mongoose')

const commerceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        minLength:4,
        maxLength:50,
        required: [true, 'name is required'],
        trim: true
    },
    brand:{
        type: String,
        minLength:5,
        maxLength:50,
        required: [true, 'name is required'],
        trim: true

    } ,
    price:{
        type:Number,
        required:true,
        min:200,
        max:8525,
        default: 0
    },
    contInStock: {
        type:Number,
        default: 0
       

    },
    rating: {
        type: Number,
        default:0
    },
    numReviews: {
        type: Number,
        default: 0
    },
    description:{
        type:String,
        required:true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

const Electronics = mongoose.model('electronic', commerceSchema);

module.exports = Electronics;