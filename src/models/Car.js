const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    nome: {
        type: 'string',
        required: true,
    },

    url: {
        type: 'string',
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Car', CarSchema)