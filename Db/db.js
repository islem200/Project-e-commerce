const mongoose = require('mongoose');

async function connectdb() {
    try {
        await mongoose.connect('mongodb://localhost/e-commerce');
        console.log('we Successfully connected to mongodb...')
        
    } catch (error) {
        console.log('We Could not connect to mongodb', error.message);
        
    }
};

module.exports = connectdb;